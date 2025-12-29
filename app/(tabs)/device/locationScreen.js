import * as Location from 'expo-location';
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { globalStyle } from '../../../design/globalStyles.js';





const LocationScreen = () => {

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [address, setAddress] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const { status } = await Location.requestForegroundPermissionsAsync();
                if (status !== 'granted') {
                    setErrorMsg('Permission to access location was denied');
                    return;
                }


                const location = await Location.getCurrentPositionAsync({});
                let address = await Location.reverseGeocodeAsync(location.coords);
                setLocation(location);
                setAddress(address[0]);
            } catch (error) {
                setErrorMsg('Error fetching location');
            }
        })();
    }, []);

    return (
        <View style={globalStyle.container}>
            <Text style={globalStyle.title}>Location</Text>
            {errorMsg ? (
                <Text style={globalStyle.errorText}>{errorMsg}</Text>
            ) : (
                <View style={styles.infoContainer}>
                    {address ? (
                        <>
                            <View style={styles.row}>
                                <Text style={styles.label}>Street:</Text>
                                <Text style={styles.value}>{address.street}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.label}>City:</Text>
                                <Text style={styles.value}>{address.city}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.label}>District:</Text>
                                <Text style={styles.value}>{address.district}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.label}>Region:</Text>
                                <Text style={styles.value}>{address.region}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.label}>Country:</Text>
                                <Text style={styles.value}>{address.country}</Text>
                            </View>
                             <View style={styles.row}>
                                <Text style={styles.label}>Postal Code:</Text>
                                <Text style={styles.value}>{address.postalCode}</Text>
                            </View>
                            <mapWindow latitude={location.coords.latitude} longitude={location.coords.longitude} />
                        </>
                    ) : (
                        <Text style={globalStyle.text}>Fetching location...</Text>
                    )}
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    infoContainer: {
        marginTop: 20,
        width: '100%',
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    label: {
        fontWeight: '600',
        fontSize: 16,
        color: '#333',
    },
    value: {
        fontSize: 16,
        color: '#666',
        flex: 1,
        textAlign: 'right',
        marginLeft: 10,
    }
});

export default LocationScreen;

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
                <Text style={globalStyle.text}>
                    {location ? address : 'Fetching location...'}
                </Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({});

export default LocationScreen;

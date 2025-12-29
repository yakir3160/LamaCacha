import * as Location from 'expo-location';
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { globalStyle } from '../../../design/globalStyles.js';





const LocationScreen = () => {

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const { status } = await Location.requestForegroundPermissionsAsync();
                if (status !== 'granted') {
                    setErrorMsg('Permission to access location was denied');
                    return;
                }

                const location = await Location.getCurrentPositionAsync({});
                setLocation(location);
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
                    {location ? JSON.stringify(location) : 'Fetching location...'}
                </Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({});

export default LocationScreen;

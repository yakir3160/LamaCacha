import MapView, {Marker} from 'react-native-maps';
import {StyleSheet, View} from 'react-native';



export const MapWindow = ({latitude, longitude}) => {
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: latitude,
                    longitude: longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Marker coordinate={{latitude, longitude}} />
            </MapView>
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        height: 200,
        width: '100%',
        marginTop: 20,
        borderRadius: 10,
        overflow: 'hidden',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});



import {MapView, Marker} from 'react-native-maps';






export const mapWindow = ({ latitude, longitude }) => {
    return (
        <MapView
            style={styles.map}
            initialRegion={{
                latitude: latitude,
                longitude: longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
        >
            <Marker coordinate={{ latitude, longitude }} />
        </MapView>
    );
};



const styles = {
    map: {  
        borderRadius: 10,
        flex: 1,
        overflow: 'hidden',
    },
};


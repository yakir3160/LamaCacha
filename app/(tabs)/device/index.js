import { View, Text ,TouchableOpacity} from 'react-native';
import {useRouter} from 'expo-router';



const DeviceScreen = () => {
    const router = useRouter();
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Device Screen</Text>
            <TouchableOpacity style={styles.button} onPress={() => router.push('/device/cameraScreen')}>
                <Text>Camera Screen</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => router.push('/device/locationScreen')}>
                <Text>Location Screen</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = {
    button: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#007AFF',
        borderRadius: 5,
        color: '#fff',
    }
};
export default DeviceScreen;

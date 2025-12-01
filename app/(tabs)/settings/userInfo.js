
import { View, Dimensions, Text ,TouchableOpacity} from 'react-native';
import { globalStyle } from '../../../design/globalStyles';
const { width, height } = Dimensions.get('window')
import { useRouter } from 'expo-router';

const router = useRouter();

export default function UserInfo() {
    return (
        <View style={globalStyle.container}>
            <Text>User Information</Text>
            <Text>Name: John Doe</Text>
            <Text>Email: johndoe@example.com</Text>
            <Text>Phone: (123) 456-7890</Text>
            <TouchableOpacity style={styles.button}><Text style={styles.buttonText} onPress={() => {router.push('/settnigs/paymentInfo') }}>Payment Information</Text></TouchableOpacity>

        </View>
    );
}

const styles = {
    button: {
        padding: 12,
        backgroundColor: '#007bff',
        borderRadius: 8,
        marginVertical: 8,
        width: '90%',
        textAlign: 'center',
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
    },
};

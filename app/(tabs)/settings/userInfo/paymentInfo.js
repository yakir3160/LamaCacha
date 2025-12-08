
import { View, Dimensions, Text, TouchableOpacity } from 'react-native';
import { globalStyle } from '../../../../design/globalStyles';
import { useRouter } from 'expo-router';

const { width, height } = Dimensions.get('window');

export default function PaymentInfo() {
    const router = useRouter();
    
    return (
        <View style={globalStyle.container}>
            <Text>Payment Information</Text>
            <Text>Cardholder Name: John Doe</Text>
            <Text>Card Number: **** **** **** 1234</Text>
            <Text>Expiration Date: 12/24</Text>
            <Text>Billing Address: 123 Main St, Anytown, USA</Text>
            <TouchableOpacity 
                style={styles.button} 
                onPress={() => router.push('updatePayment')}>
                <Text style={styles.buttonText}>Update Payment Method</Text>
            </TouchableOpacity>
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

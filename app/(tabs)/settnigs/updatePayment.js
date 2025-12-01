
import { View, Dimensions, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { globalStyle } from '../../../design/globalStyles';
import { useState } from 'react';
import { useRouter } from 'expo-router';

const { width, height } = Dimensions.get('window');

export default function UpdatePayment() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        cardHolderName: '',
        billingAddress: '',
        city: '',
        postalCode: '',
    });

    const handleInputChange = (field, value) => {
        let formattedValue = value;
        
        // Format card number with spaces
        if (field === 'cardNumber') {
            formattedValue = value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim();
        }
        
        // Format expiry date MM/YY
        if (field === 'expiryDate') {
            formattedValue = value.replace(/\D/g, '');
            if (formattedValue.length >= 2) {
                formattedValue = formattedValue.substring(0, 2) + '/' + formattedValue.substring(2, 4);
            }
        }
        
        // Only allow numbers for CVV
        if (field === 'cvv') {
            formattedValue = value.replace(/\D/g, '');
        }
        
        setFormData(prev => ({
            ...prev,
            [field]: formattedValue
        }));
    };

    const handleSubmit = () => {
        // Basic validation
        const { cardNumber, expiryDate, cvv, cardHolderName } = formData;
        
        if (!cardNumber || cardNumber.replace(/\s/g, '').length < 13) {
            alert('Please enter a valid card number');
            return;
        }
        
        if (!expiryDate || expiryDate.length !== 5) {
            alert('Please enter a valid expiry date (MM/YY)');
            return;
        }
        
        if (!cvv || cvv.length < 3) {
            alert('Please enter a valid CVV');
            return;
        }
        
        if (!cardHolderName.trim()) {
            alert('Please enter the cardholder name');
            return;
        }
        
        // Here you would typically validate and submit the form
        console.log('Payment info updated:', formData);
        alert('Payment information updated successfully!');
        // Navigate back or show success message
        router.back();
    };

    return (
        <ScrollView style={{flex: 1, backgroundColor: '#f5f5f5'}}>
            <View style={styles.formContainer}>
                <Text style={styles.title}>Update Payment Information</Text>
                
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Card Number</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="1234 5678 9012 3456"
                        value={formData.cardNumber}
                        onChangeText={(text) => handleInputChange('cardNumber', text)}
                        keyboardType="numeric"
                        maxLength={19}
                    />
                </View>

                <View style={styles.row}>
                    <View style={[styles.inputGroup, styles.halfWidth]}>
                        <Text style={styles.label}>Expiry Date</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="MM/YY"
                            value={formData.expiryDate}
                            onChangeText={(text) => handleInputChange('expiryDate', text)}
                            keyboardType="numeric"
                            maxLength={5}
                        />
                    </View>
                    <View style={[styles.inputGroup, styles.halfWidth]}>
                        <Text style={styles.label}>CVV</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="123"
                            value={formData.cvv}
                            onChangeText={(text) => handleInputChange('cvv', text)}
                            keyboardType="numeric"
                            maxLength={4}
                            secureTextEntry
                        />
                    </View>
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Cardholder Name</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="John Doe"
                        value={formData.cardHolderName}
                        onChangeText={(text) => handleInputChange('cardHolderName', text)}
                    />
                </View>

                <Text style={styles.sectionTitle}>Billing Address</Text>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Address</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="123 Main Street"
                        value={formData.billingAddress}
                        onChangeText={(text) => handleInputChange('billingAddress', text)}
                    />
                </View>

                <View style={styles.row}>
                    <View style={[styles.inputGroup, styles.halfWidth]}>
                        <Text style={styles.label}>City</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="New York"
                            value={formData.city}
                            onChangeText={(text) => handleInputChange('city', text)}
                        />
                    </View>
                    <View style={[styles.inputGroup, styles.halfWidth]}>
                        <Text style={styles.label}>Postal Code</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="12345"
                            value={formData.postalCode}
                            onChangeText={(text) => handleInputChange('postalCode', text)}
                        />
                    </View>
                </View>

                <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                    <Text style={styles.submitButtonText}>Update Payment Information</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.cancelButton} onPress={() => router.back()}>
                    <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = {
    formContainer: {
        padding: 20,
        paddingBottom: 40,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#333',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginTop: 20,
        marginBottom: 15,
        color: '#333',
    },
    inputGroup: {
        marginBottom: 15,
    },
    label: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 5,
        color: '#555',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
        backgroundColor: '#fff',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    halfWidth: {
        width: '48%',
    },
    submitButton: {
        backgroundColor: '#007bff',
        padding: 15,
        borderRadius: 8,
        marginTop: 20,
        marginBottom: 10,
    },
    submitButtonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '600',
    },
    cancelButton: {
        backgroundColor: '#6c757d',
        padding: 15,
        borderRadius: 8,
        marginBottom: 20,
    },
    cancelButtonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
    },
};

import { View, Text, StyleSheet } from 'react-native';
import { appColors } from '../../design/colors';

export default function PaymentDetails() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment Methods</Text>
      <View style={styles.card}>
        <Text style={styles.cardType}>Visa</Text>
        <Text style={styles.cardNumber}>**** **** **** 1234</Text>
        <Text style={styles.expiry}>Expires: 12/25</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardType}>MasterCard</Text>
        <Text style={styles.cardNumber}>**** **** **** 5678</Text>
        <Text style={styles.expiry}>Expires: 09/26</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: appColors.secondary,
  },
  card: {
    backgroundColor: appColors.primary,
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: appColors.active,
  },
  cardType: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: appColors.secondary,
  },
  cardNumber: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  expiry: {
    fontSize: 14,
    color: '#666',
  },
});

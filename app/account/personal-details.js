import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { appColors } from '../../design/colors';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

/**
 * מסך פרטים אישיים
 * ----------------
 * מציג את המידע האישי של המשתמש.
 * מכיל קישור לניהול אמצעי תשלום.
 */
export default function PersonalDetails() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Personal Details</Text>
      
      {/* אזור הפרטים */}
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>Yakir Albilya</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>yakir@example.com</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Phone:</Text>
        <Text style={styles.value}>+972 50 123 4567</Text>
      </View>

      {/* קישור ניווט לאמצעי תשלום */}
      <TouchableOpacity 
        style={styles.linkButton}
        onPress={() => router.push('/account/payment-details')}
      >
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="card-outline" size={24} color={appColors.active} style={{marginRight: 10}} />
            <Text style={styles.linkText}>Manage Payment Methods</Text>
        </View>
        <Ionicons name="chevron-forward" size={24} color={appColors.active} />
      </TouchableOpacity>
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
  infoContainer: {
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 10,
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  value: {
    fontSize: 18,
    color: '#333',
  },
  linkButton: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#f0fdf4',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: appColors.active,
  },
  linkText: {
    fontSize: 16,
    color: appColors.active,
    fontWeight: '600',
  }
});

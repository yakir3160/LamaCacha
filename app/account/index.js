
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { appColors } from '../../design/colors';

/**
 * מסך ראשי - חשבון
 * ----------------
 * מציג סיכום פרופיל משתמש ותפריט אפשרויות.
 * משתמש ב-FlatList לרינדור יעיל של פריטי התפריט.
 */

const menuItems = [
  { id: '1', title: 'Personal Details', icon: 'person-outline', route: '/account/personal-details' },
  { id: '3', title: 'Orders', icon: 'receipt-outline', route: '/account/orders' }, // Placeholder
  { id: '4', title: 'Settings', icon: 'settings-outline', route: '/account/settings' }, // Placeholder
];

export default function AccountScreen() {
  const router = useRouter();

  // Render function for each menu item
  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.item} 
      onPress={() => item.route ? router.push(item.route) : alert('Coming soon')}
    >
      <View style={styles.itemLeft}>
        <Ionicons name={item.icon} size={24} color={appColors.secondary} />
        <Text style={styles.itemText}>{item.title}</Text>
      </View>
      <Ionicons name="chevron-forward" size={24} color="#ccc" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* כותרת פרופיל משתמש */}
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>YA</Text>
        </View>
        <Text style={styles.name}>Yakir Albilya</Text>
        <Text style={styles.email}>yakir@example.com</Text>
      </View>
      
      {/* רשימת תפריט */}
      <FlatList
        data={menuItems}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginBottom: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: appColors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 2,
    borderColor: appColors.active,
  },
  avatarText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: appColors.active,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: appColors.secondary,
  },
  email: {
    fontSize: 14,
    color: '#666',
  },
  listContent: {
    paddingHorizontal: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 16,
    marginLeft: 15,
    color: '#333',
  },
});

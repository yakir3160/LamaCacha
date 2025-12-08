
import { View, Dimensions, Text, TouchableOpacity ,FlatList} from 'react-native';
import { useRouter } from 'expo-router';
import { globalStyle } from '../../../design/globalStyles';
const { width, height } = Dimensions.get('window')
import { appColors } from '../../../design/colors';

import { Ionicons } from '@expo/vector-icons';
const router = useRouter();



const menuItems = [
    { id: '1', title: 'Personal Details', icon: 'person-outline', route: '/settings/userInfo' },
    { id: '3', title: 'Orders', icon: 'receipt-outline', route: '/settings/orders' },
];




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

export default function Settings() {
    return (
        <View style={globalStyle.container}>
            <FlatList
                data={menuItems}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.listContent}
            />
        </View>
    ); s
}

const styles = {
    button: {
        padding: 12,
        backgroundColor: "#ffff",
        borderRadius: 8,
        marginVertical: 8,
        width: '90%',
        textAlign: 'left',
    },
    buttonText: {
        color: appColors.text,
        textAlign: 'center',
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
    listContent: {
        paddingHorizontal: 20,
    },

};  

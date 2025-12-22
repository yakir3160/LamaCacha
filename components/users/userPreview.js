import { TouchableOpacity, Text, View } from 'react-native';
import { useRouter } from 'expo-router';

const UserPreview = ({user}) => {
    const router = useRouter();

    const handlePress = () => {
        router.push({
            pathname: `/users/${user.id}`,
            params: { userData: JSON.stringify(user) }
        });
    };

    return (        
        <TouchableOpacity style={styles.container} onPress={handlePress}>
            <View style={styles.header}>
                <Text style={styles.name}>{user.firstName} {user.lastName}</Text>
                <Text style={styles.username}>@{user.username}</Text>
            </View>
            <Text style={styles.text}>Email: {user.email}</Text>
            <Text style={styles.text}>Phone: {user.phone}</Text>
            <Text style={styles.arrowText}>→ View Details</Text>
        </TouchableOpacity>
    );
};

const styles = {
    container: {
        margin: 10,
        padding: 15,        
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        backgroundColor: '#f9f9f9',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    header: {
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
        paddingBottom: 8,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    username: {
        fontSize: 14,
        color: '#666',
        marginTop: 2,
    },
    text: {
        fontSize: 14,
        color: '#555',
        marginTop: 4,
    },
    arrowText: {
        fontSize: 14,
        color: '#007AFF',
        marginTop: 8,
        textAlign: 'right',
        fontWeight: '600',
    }
};

export default UserPreview;
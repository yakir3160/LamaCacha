import { TouchableOpacity, Text } from 'react-native';







const userPreview = ({user}) => {
    return (        
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text}>Username: {user.username}</Text>
            <Text style={styles.text}>Email: {user.email}</Text>
        </TouchableOpacity>
    );
};

const styles = {
    container: {
        margin: 10,
        padding: 10,        
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        backgroundColor: '#f9f9f9',
    },
    text : {
        fontSize: 16,
        color: '#333',
    }
};

export default userPreview;
import { useState, useEffect } from 'react';
import { FlatList, Text, View } from 'react-native';
import  UserPreview from './userPreview.js';
import { getUsers } from '../../services/users.service';
import { appColors } from '../../design/colors.js';
import Loader from '../reusables/Loader.js';



const UsersList = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const loadData = async () => {
        setLoading(true)
        try {
            const data = await getUsers()
            setUsers(data)
        } catch (error) {
            console.error('Error loading users:', error)
            setError('Failed to load users')
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {

        loadData()
    }, [])
    return (
        <View style={styles.listContainer}>

            {loading ? <Loader text="Loading users..." /> : error ? <Text style={{color: 'red'}}>{error}</Text> : null}
            
            {!loading && !error && users.length === 0 && <Text>No users found</Text>}
            {!loading && !error && users.length > 0 && <Text>Found {users.length} users</Text>}

            <FlatList
                style={{ flex: 1, width: '100%' }}
                contentContainerStyle={{ paddingBottom: 20 }}
                refreshing={false}
                onRefresh={loadData}
                data={users}
                renderItem={({ item }) => <UserPreview user={item} />}
                keyExtractor={item => item.id.toString()}

            />
        </View>
    );
};
const styles = {
    listContainer: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
        // Removed centering to allow FlatList to fill the container
        // justifyContent: 'center',
        // alignItems: 'center',

    },
    activityIndicatorContainer: {
        // ...existing code...
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        backgroundColor: '#f9f9f9',
    }
};
export default UsersList;
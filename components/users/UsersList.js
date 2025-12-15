import { useState, useEffect } from 'react';
import { FlatList, Text, View } from 'react-native';
import UserCard from './userPreview.js';
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
            console.error(error)
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

            {loading ? <Loader text="Loading products..." /> : error ? <Text>{error}</Text> : null}

            <FlatList
                refreshing={false}
                onRefresh={loadData}
                data={users}
                renderItem={({ item }) => <UserCard user={item} />}
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
        justifyContent: 'center',
        alignItems: 'center',

    },
    activityIndicatorContainer: {
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
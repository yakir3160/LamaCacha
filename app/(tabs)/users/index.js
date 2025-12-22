import { View } from 'react-native';
import UsersList from '../../../components/users/UsersList.js'
import { globalStyle } from '../../../design/globalStyles.js';





export default function users() {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <UsersList />
        </View>
    )
} 

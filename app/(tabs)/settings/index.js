
import { View, Dimensions, Text ,TouchableOpacity} from 'react-native';
import { useRouter } from 'expo-router';
import { globalStyle } from '../../../design/globalStyles';
const { width, height } = Dimensions.get('window')
import { appColors } from '../../../design/colors';
const router = useRouter();
export default function Settings() {
    return (
          <View style={globalStyle.container}>
            <Text>Settings Page</Text>
            <TouchableOpacity style={styles.button}><Text style={styles.buttonText} onPress={() => { router.push('/settnigs/userInfo') }}>Manage your preferences and account settings</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button}><Text style={styles.buttonText} onPress={() => { router.push('/settnigs/userInfo') }}>Customize your experience</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button}><Text style={styles.buttonText} onPress={() => { router.push('/settnigs/userInfo') }}>Privacy Settings</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button}><Text style={styles.buttonText} onPress={() => { router.push('/settnigs/userInfo') }}>Account Security</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button}><Text style={styles.buttonText} onPress={() => { router.push('/settnigs/userInfo') }}>Notification Preferences</Text></TouchableOpacity>
        </View>
    );
}

const styles = {
    button: {
        padding: 12,
        backgroundColor: appColors.action,
        borderRadius: 8,
        marginVertical: 8,
        width: '90%',
        textAlign: 'left',
    },
    buttonText: {
        color: appColors.text,
        textAlign: 'center',
    },
};  

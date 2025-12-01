
import { View, Dimensions, Text } from 'react-native';
import { globalStyle } from '../../design/globalStyles';
const { width, height } = Dimensions.get('window')

export default function Settings() {
    return (
          <View style={globalStyle.container}>
            <Text>Settings Page</Text>
        </View>
    );
}


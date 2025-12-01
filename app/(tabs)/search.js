
import { View, Dimensions, Text } from 'react-native';
import { globalStyle } from '../../design/globalStyles';
const { width, height } = Dimensions.get('window')

export default function Search() {
    return (
        <View style={globalStyle.container}>
            <Text>Search Page</Text>
            <Text>Search for your favorite items</Text>
        </View>
    );
}


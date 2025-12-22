
import { View, Dimensions, Text ,FlatList} from 'react-native';
import { globalStyle } from '../../../design/globalStyles';
const { width, height } = Dimensions.get('window')

export default function Products() {
    return (
        <View style={globalStyle.container}>
            <Text>Search Page</Text>
            <Text>Search for your favorite items</Text>
          
        </View>
    );
}

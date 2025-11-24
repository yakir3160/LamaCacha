
import { Text, View ,FlatList} from 'react-native';
import {globalStyle} from "../../design/globalStyles.js"


export default function Body() {
    return (

        <View style={globalStyle.content}>
            <Text style={globalStyle.text.light}>Body - All the content goes here</Text>
        </View>


    );
}


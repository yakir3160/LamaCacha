
import { Text, View ,FlatList} from 'react-native';
import {globalStyle} from "../../design/globalStyles.js"
import {FormExample} from "../forms/form.js"

export default function Body() {
    return (

        <View style={globalStyle.content}>
            <Text style={globalStyle.text.dark}>Body - All the content goes here</Text>
            <FormExample />
        </View>


    );
}


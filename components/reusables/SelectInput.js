

import { Picker } from '@react-native-picker/picker';
import { View } from 'react-native';
import { globalStyle } from '../../design/globalStyles';


export const SelectInput = ({ selectedValue, setSelectedValue, values }) => {
    return (
        <View style={globalStyle.input}>
            <Picker
                selectedValue={selectedValue}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                style={{
                    width: '100%',
                    backgroundColor: '#fff',
                    borderRadius: 10,
                }}
            >
                <Picker.Item label="Select an option..." value="" />
                {values.map((val, index) => (
                    <Picker.Item key={index} label={val.label} value={val.value} />
                ))}
            </Picker>
        </View>
    );
}

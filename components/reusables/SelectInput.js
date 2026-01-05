

import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        width: '100%',
        zIndex: 1000, // חשוב כדי שהדרופדאון יופיע מעל אלמנטים אחרים
    },
    dropdown: {
        borderColor: 'gray',
        borderWidth: 2,
        borderRadius: 25,
        backgroundColor: '#fff',
        height: 50,
    },
    dropdownContainer: {
        borderColor: 'gray',
        borderWidth: 2,
        borderRadius: 15,
        backgroundColor: '#fff',
    }
});

export const SelectInput = ({ selectedValue, setSelectedValue, values }) => {
    const [open, setOpen] = useState(false);

    return (
        <View style={[styles.container, { zIndex: open ? 1000 : 1 }]}>
            <DropDownPicker
                open={open}
                value={selectedValue}
                items={values}
                setOpen={setOpen}
                setValue={setSelectedValue}
                placeholder="בחר אופציה..."
                style={styles.dropdown}
                dropDownContainerStyle={styles.dropdownContainer}
                listMode="SCROLLVIEW"
                scrollViewProps={{
                    nestedScrollEnabled: true,
                }}
            />
        </View>
    );
}

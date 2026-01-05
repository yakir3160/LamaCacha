import { View, Text, TouchableOpacity, InputAccessoryView, Keyboard, StyleSheet } from 'react-native';

export const KeyboardDoneBar = () => (
    <InputAccessoryView nativeID="doneToolbar">
        <View style={styles.toolbar}>
            <TouchableOpacity
                onPress={Keyboard.dismiss}
                style={styles.button}
            >
                <Text style={styles.text}>סיום</Text>
            </TouchableOpacity>
        </View>
    </InputAccessoryView>
);

const styles = StyleSheet.create({
    toolbar: {
        backgroundColor: '#f7f7f7f3', 
        height: 44,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingHorizontal: 15,
       
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    text: {
        color: '#0088ffff',
        fontSize: 16,
        fontWeight: '600'
    }
});
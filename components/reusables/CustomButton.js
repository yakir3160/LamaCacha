import { TouchableOpacity, Text } from 'react-native';


export const CustomButton = ({ onPress, text, color ,textColor}) => {
    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor: color || '#04b36e' }]}
            onPress={onPress}
        >
            <Text style={[styles.buttonText, { color: textColor || '#fff' }]}>{text}</Text>
        </TouchableOpacity>
    );
};


const styles = {
    button: {
        backgroundColor: '#04b36e' ,
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20
    },
    buttonText: {
        color: '#fff',
        fontSize: 16
    }
};

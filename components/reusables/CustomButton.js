import { TouchableOpacity, Text } from 'react-native';


export const CustomButton = ({ onPress, text, color ,textColor}) => {
    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor: color || '#01c577ff' }]}
            onPress={onPress}
        >
            <Text style={[styles.buttonText, { color: textColor || '#fff' }]}>{text}</Text>
        </TouchableOpacity>
    );
};


const styles = {
    button: {
     
        padding: 15,
        borderRadius: 25,
        alignItems: 'center',
        marginTop: 20
    },
    buttonText: {
        color: '#fff',
        fontSize: 16
    }
};

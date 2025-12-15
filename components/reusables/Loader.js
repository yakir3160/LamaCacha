
import { View,Text,ActivityIndicator } from "react-native";
import { appColors } from "../../design/colors.js";

const Loader = ({ text }) => {
    return (
        <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color={appColors.action} />
            {text && <Text style={styles.loaderText}>{text}</Text>}
        </View>
    );
};

const styles = {
    loaderContainer: {
        width: '60%',
        height: 'fit-content',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: appColors.primary,
        border: '1px solid #ccc',
        borderRadius: 20,
        padding: 20,
    },
    loaderText: {
        marginTop: 10,
        fontSize: 16,
        color: '#333',
        fontWeight: 'bold'
    }
};

export default Loader;
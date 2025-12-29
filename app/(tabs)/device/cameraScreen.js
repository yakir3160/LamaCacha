import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import { globalStyle } from '../../../design/globalStyles.js';


const CameraScreen = () => {
    const [image, setImage] = useState(null);
    const [permissionStatus, setPermissionStatus] = useState(null);
    const [error, setError] = useState(null);


    const askPermission = async () => {
        try {
            const { status } = await ImagePicker.requestCameraPermissionsAsync();
            if (status !== 'granted') {
               throw new Error("Camera permission not granted");
            }
            setPermissionStatus(status);
        } catch (error) {
            setError("Error asking for camera permission");
        }
    };
    const takePhoto = async () => {
        try {
            await askPermission();
        
            let result = await ImagePicker.launchCameraAsync({
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            }); 
            if (!result.canceled) {
                setImage(result.assets[0].uri);
            }
        } catch (error) {
            setError("Camera permission is required to take photos.");
            return;
        }
    };
    const pickImage = async () => {
        try {
            await askPermission();
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });

            if (!result.canceled) {
                setImage(result.assets[0].uri);
            }
        } catch (error) {
            setError("Error picking image");
        }
    };
    return (
        <View style={globalStyle.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={pickImage} style={styles.button}>
                    <Text style={styles.buttonText}>Pick an image</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={takePhoto} style={styles.button}>
                    <Text style={styles.buttonText}>Take a photo</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.imageArea}>
                {image ? (
                    <Image source={{ uri: image }} style={styles.image} />
                ) : (
                    <View style={styles.placeholder}>
                        <Text style={styles.placeholderText}>No Image Selected</Text>
                    </View>
                )}
            </View>
            
            {error && <Text style={globalStyle.errorText}>{error}</Text>}
        </View>
    );


}
const styles = StyleSheet.create({
    headerContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 30,
        marginTop: 10,
    },
    button: {
        paddingVertical: 12,
        paddingHorizontal: 20,
        backgroundColor: '#007AFF',
        borderRadius: 8,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    imageArea: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 300,
        height: 300,
        borderRadius: 12,
        resizeMode: 'cover',
    },
    placeholder: {
        width: 300,
        height: 300,
        borderRadius: 12,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#e0e0e0',
        borderStyle: 'dashed',
    },
    placeholderText: {
        color: '#999',
        fontSize: 16,
    }
});

export default CameraScreen;
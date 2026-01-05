import * as Sharing from 'expo-sharing';
import { TouchableOpacity, View, Share } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ShareButton({resource}) {

    const openShareDialog = async () => {
        // If resource is a web link or plain text, use React Native Share
        if (typeof resource === 'string' && !resource.startsWith('file://')) {
             try {
                await Share.share({ message: resource });
             } catch (error) {
                 console.log(error);
             }
             return;
        }

        if (!(await Sharing.isAvailableAsync())) {
            alert("Sharing is not available on this platform");
            return;
        }
        await Sharing.shareAsync(resource);
    };
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>

            {resource && (
                <TouchableOpacity
                    onPress={openShareDialog}
                    style={{
                        backgroundColor: '#e1e1e1',
                    }}
                >
                    {/* האייקון עצמו */}
                    <Ionicons name="share-social" size={30} color="#007AFF" />
                </TouchableOpacity>
            )}
        </View>
    );
}

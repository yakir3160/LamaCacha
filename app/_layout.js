import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
 
export default function RootLayout() {
return (
 <SafeAreaProvider>
   <Stack>
     {/* The main screen (tabs) loads the folder */}
     {/* To hide the duplicate header (since tabs have their own header) - false :headerShown */}
     <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
   </Stack>
 </SafeAreaProvider>
 );
}
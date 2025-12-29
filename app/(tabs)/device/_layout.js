import { Stack } from 'expo-router';


export default function DeviceLayout() {
  return (
    <Stack>

      <Stack.Screen
        name="index"
        options={{
          title: 'Device',
          headerLargeTitle: true,
          headerTransparent: true,
          headerBlurEffect: 'regular',
          headerSearchBarOptions: {
            placement: 'automatic',
            placeholder: 'Do actions with your device',
            onChangeText: (event) => {
              // טיפול בשינוי טקסט החיפוש
              console.log(event.nativeEvent.text);
            },
          },
        }}
      />
        <Stack.Screen
          name="cameraScreen"
          options={{
            title: 'Camera',
            headerLargeTitle: true,
            headerTransparent: true,
            headerBlurEffect: 'regular',
          }}
        />
        <Stack.Screen
          name="locationScreen"
          options={{
            title: 'Location',
            headerLargeTitle: true,
            headerTransparent: true,
            headerBlurEffect: 'regular',
          }}
        />
        
    </Stack>
  );
}
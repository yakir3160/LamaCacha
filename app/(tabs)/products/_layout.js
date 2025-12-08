import { Stack } from 'expo-router';


export default function SearchLayout() {
  return (
    <Stack>

      <Stack.Screen
        name="index"
        options={{
          title: 'Products',
          headerLargeTitle: true,
          headerTransparent: true,
          headerBlurEffect: 'regular',
          headerSearchBarOptions: {
            placement: 'automatic',
            placeholder: 'Search for new products',
            onChangeText: (event) => {
              // טיפול בשינוי טקסט החיפוש
              console.log(event.nativeEvent.text);
            },
          },
        }}
      />
    </Stack>
  );
}
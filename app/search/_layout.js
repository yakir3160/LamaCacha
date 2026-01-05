import { Stack } from 'expo-router';

/**
 * לייאאוט חיפוש (Search Stack)
 * ----------------------------
 * קובץ זה מגדיר את הניווט עבור מסך החיפוש.
 * הוא משתמש ב-Stack Navigator כדי להציג את שורת החיפוש הטבעית (Native Search Bar)
 * של המכשיר, כולל אפקטים של שקיפות וכותרת גדולה.
 */
export default function SearchLayout() {
  return (
    <Stack>
      {/* 
        הגדרת מסך החיפוש עם אפשרויות נייטיב:
        - headerLargeTitle: כותרת גדולה (iOS)
        - headerTransparent: רקע שקוף לכותרת
        - headerSearchBarOptions: הגדרות שורת החיפוש הטבעית
      */}
      <Stack.Screen
        name="index"
        options={{
          title: 'Search',
          headerLargeTitle: true,
          headerTransparent: true,
          headerBlurEffect: 'regular',
          headerSearchBarOptions: {
            placement: 'automatic',
            placeholder: 'Search',
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
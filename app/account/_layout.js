import { Stack } from 'expo-router';
import { appColors } from '../../design/colors';

/**
 * נווט מחסנית (Stack Navigator) לחשבון
 * ------------------------------------
 * לייאאוט זה מנהל את מחסנית הניווט בתוך טאב ה"חשבון".
 * הוא מאפשר מעבר למסכים חדשים (כמו פרטים אישיים, אמצעי תשלום)
 * תוך שמירה על סרגל הטאבים התחתון גלוי.
 */
export default function AccountLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: appColors.background,
        },
        headerTintColor: appColors.secondary,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      {/* מסך החשבון הראשי (index.js) */}
      <Stack.Screen name="index" options={{ title: 'Account' }} />
    </Stack>
  );
}

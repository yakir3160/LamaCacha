import { Stack } from 'expo-router';
import { appColors } from '../../design/colors';

export default function UsersLayout() {
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
      <Stack.Screen name="index" options={{ title: 'Users' }} />
      <Stack.Screen name="[id]" options={{ title: 'User Details' }} />
    </Stack>
  );
}

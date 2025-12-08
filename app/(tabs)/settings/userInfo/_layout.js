import { Stack } from 'expo-router';
import { appColors } from '../../../../design/colors';

export default function SettingsLayout() {
  return (
    <Stack
      screenOptions={{
      
        headerStyle: {
          backgroundColor: appColors.primary,
        },
        headerTintColor: appColors.text,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="index"
        options={{
          title: 'User Information',
    
        }}
      />
      <Stack.Screen
        name="paymentInfo"
        options={{
          title: '',
        }}
      />
      <Stack.Screen
        name="updatePayment"
        options={{
          title: 'Update Payment Information',
        }}
      />
    </Stack>
  );
}
import { Platform } from 'react-native';
import { NativeTabs, Icon, Label, VectorIcon } from 'expo-router/unstable-native-tabs';
import { Ionicons } from '@expo/vector-icons';
import { appColors } from '../../design/colors';

export default function Layout() {
  return (
    <NativeTabs tintColor={appColors.action}>
      {/* Home Tab - Uses SF Symbol on iOS, Ionicons on Android */}
      <NativeTabs.Trigger name="index">
        <Label>Home</Label>
        {Platform.select({
          ios: <Icon sf="house.fill" />,
          android: <Icon src={<VectorIcon family={Ionicons} name="home" />} />,
        })}
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="products" >
        <Label>Products</Label>
        {Platform.select({
          ios: <Icon sf="bag.fill" />,
          android: <Icon src={<VectorIcon family={Ionicons} name="apps-outline" />} />,
        })}
       
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name='users'>
        <Label>Users</Label>
       {Platform.select({
          ios: <Icon sf="person.2.fill" />,
          android: <Icon src={<VectorIcon family={Ionicons} name="people" />} />,
        })}
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="device">
        {Platform.select({
          ios: <Icon sf="iphone.homebutton" />,
          android: <Icon src={<VectorIcon family={Ionicons} name="phone-portrait-outline" />} />,
        })}
      </NativeTabs.Trigger> 
      
      {/* Settings Tab - Uses SF Symbol on iOS, Ionicons on Android */}
      <NativeTabs.Trigger name="settings">
        <Label>Settings</Label>
        {Platform.select({
          ios: <Icon sf="gear" />,
          android: <Icon src={<VectorIcon family={Ionicons} name="settings" />} />,
        })}
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}

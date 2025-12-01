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
      
      {/* Search Tab - defined with specific role */}
      <NativeTabs.Trigger name="search" role="search">
        <Label>Search</Label>
        {Platform.select({
          ios: <Icon sf="magnifyingglass" />,
          android: <Icon src={<VectorIcon family={Ionicons} name="search" />} />,
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

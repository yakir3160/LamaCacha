import { Platform } from 'react-native';
import { NativeTabs, Icon, Label, VectorIcon } from 'expo-router/unstable-native-tabs';
import { Ionicons } from '@expo/vector-icons';
import { appColors } from '../design/colors';

/**
 * לייאאוט ראשי (ניווט טאבים)
 * ---------------------------
 * זהו הנווט הראשי (Root Navigator) של זרימת האפליקציה.
 * הוא משתמש ב-NativeTabs כדי לספק סרגל טאבים תחתון טבעי לפלטפורמה.
 * - iOS: משתמש ב-SF Symbols ואפקטי טשטוש (Blur) טבעיים.
 * - Android: משתמש בעיצוב Material Design.
 */
export default function Layout() {
  return (
    <NativeTabs tintColor={appColors.active}>
      {/* טאב הבית */}
      <NativeTabs.Trigger name="index">
        <Label>Home</Label>
        {Platform.select({
          ios: <Icon sf="house.fill"  />,
          android: <Icon src={<VectorIcon family={Ionicons} name="home" />} />,
        })}
      </NativeTabs.Trigger>
      
      {/* טאב חיפוש - מוגדר עם role="search" להתנהגות טבעית */}
      <NativeTabs.Trigger name="search" role="search">
        <Label>Search</Label>
        {Platform.select({
          ios: <Icon sf="magnifyingglass" />,
          android: <Icon src={<VectorIcon family={Ionicons} name="search" />} />,
        })}
      </NativeTabs.Trigger>

      {/* טאב עגלה */}
      <NativeTabs.Trigger name="cart">
        <Label>Cart</Label>
        {Platform.select({
          ios: <Icon sf="cart.fill" />,
          android: <Icon src={<VectorIcon family={Ionicons} name="cart" />} />,
        })}
      </NativeTabs.Trigger>

      {/* טאב משתמשים */}
      <NativeTabs.Trigger name="users">
        <Label>Users</Label>
        {Platform.select({
          ios: <Icon sf="person.2.fill" />,
          android: <Icon src={<VectorIcon family={Ionicons} name="people" />} />,
        })}
      </NativeTabs.Trigger>

      {/* טאב חשבון - מצביע לתיקיית 'account' (שיש לה _layout.js משלה) */}
      <NativeTabs.Trigger name="account">
        <Label>Account</Label>
        {Platform.select({
          ios: <Icon sf="person.fill" />,
          android: <Icon src={<VectorIcon family={Ionicons} name="person" />} />,
        })}
      </NativeTabs.Trigger>
   
      </NativeTabs>
  );
}

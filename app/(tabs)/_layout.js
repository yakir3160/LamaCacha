import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { appColors } from '../../design/colors';



export default function TabLayout() {
  return (
    <Tabs screenOptions={{ 
      tabBarActiveTintColor: appColors.action,
      tabBarInactiveTintColor: appColors.secondary,
      tabBarStyle: { backgroundColor: appColors.primary },
      headerShown: false,
  
    }}>
      {/* טאב הבית */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          
          tabBarIcon: ({ color }) => <Ionicons size={28} name="home" color={color} />,
        }}
      />
      {/* טאב הגדרות */}
      <Tabs.Screen
        name="settnigs"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="cog" color={color} />,
        }}
      />
       <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="search" color={color} />,
        }}
      />
    </Tabs>
  );
}

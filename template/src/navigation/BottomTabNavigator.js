// BottomTabNavigator.js
import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useTheme} from '../contexts/ThemeContext';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const {colors} = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let icon;

          if (route.name === 'Home') {
            icon = 'home';
          } else if (route.name === 'Settings') {
            icon = 'cog';
          } else if (route.name === 'Profile') {
            icon = 'user';
          } else if (route.name === 'Notifications') {
            icon = 'info-circle';
          }

          return (
            <Icon
              name={icon}
              size={30}
              color={focused ? colors.primary : colors.sidebar_icon}
            />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: colors.sidebar_icon,
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Profile" component={SettingsScreen} />
      <Tab.Screen name="Notifications" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

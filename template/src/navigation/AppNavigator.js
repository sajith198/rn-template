import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabNavigator';
import AuthNavigator from './AuthNavigator';
import AuthLoadingScreen from '../screens/Auth/AuthLoadingScreen';
import {useAuth} from '../contexts/AuthContext';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const {isLoggedIn} = useAuth();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          <Stack.Screen
            name="Main"
            component={BottomTabNavigator}
            options={{headerShown: false}}
          />
        ) : (
          <Stack.Screen
            name="Auth"
            component={AuthNavigator}
            options={{headerShown: false}}
          />
        )}
        <Stack.Screen
          name="AuthLoading"
          component={AuthLoadingScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  TransitionPresets,
} from '@react-navigation/native-stack';

import OnBoardingScreen from './src/screens/OnBoarding';
import HomeScreen from './src/screens/home/Home';
import LoginScreen from './src/screens/Login';
import AppScreen from './src/screens/App';
import {TailwindProvider} from 'tailwindcss-react-native';
import {NativeBaseProvider} from 'native-base';
import ClockInScreen from './src/screens/attendance/clock-in/ClockIn'; // import {isReadyRef, navigationRef} from 'react-navigation-helper'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <NativeBaseProvider>
          <Stack.Navigator
            screenOptions={{
              gestureEnable: true,
            }}>
            <Stack.Screen name="Onboard" component={OnBoardingScreen} />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{
                headerShown: false,
                presentationStyle: 'modal',
              }}
            />
            <Stack.Screen
              name="App"
              component={AppScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="ClockIn"
              component={ClockInScreen}
              options={{
                headerShown: false,
                presentation: 'modal',
              }}
            />
          </Stack.Navigator>
        </NativeBaseProvider>
      </TailwindProvider>
    </NavigationContainer>
  );
};

export default App;

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  BellIcon,
  ChartPieIcon,
  ChatAlt2Icon,
  HomeIcon,
  PlusIcon,
  UserCircleIcon,
  ClockIcon,
} from 'react-native-heroicons/outline';
// import {UserCircleIcon} from 'react-native-heroicons/solid';
import {BlurView} from 'expo-blur';
import HomeScreen from '../screens/Home';
import LoginScreen from '../screens/Login';
import {View, TouchableOpacity} from 'react-native';

import * as SolidIcon from 'react-native-heroicons/solid';
import CoomingSoon from '../screens/CoomingSoon';

import {useNavigation} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const BottomTabBar = () => {
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#246bd9',
        tabBarStyle: {
          position: 'absolute',
          height: 60,
        },
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({focused, color, size}) => {
            if (!focused) {
              return <HomeIcon color={color} size={size} />;
            }
            return <SolidIcon.HomeIcon color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="Graph"
        component={CoomingSoon}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({focused, color, size}) =>
            focused ? (
              <SolidIcon.ChartPieIcon color={color} size={size} />
            ) : (
              <ChartPieIcon color={color} size={size} />
            ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({focused, color, size}) => (
            <View className={`absolute -top-6 px-2 `}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('ClockIn');
                }}>
                <View className="bg-primary-500 rounded-full p-3 ">
                  <ClockIcon color="white" size={size} />
                </View>
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Feedback"
        component={CoomingSoon}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({focused, color, size}) =>
            focused ? (
              <SolidIcon.ChatAlt2Icon color={color} size={size} />
            ) : (
              <ChatAlt2Icon color={color} size={size} />
            ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={CoomingSoon}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused, color, size}) =>
            focused ? (
              <SolidIcon.UserCircleIcon color={color} size={size} />
            ) : (
              <UserCircleIcon color={color} size={size} />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabBar;

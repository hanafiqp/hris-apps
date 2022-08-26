import {View, Text} from 'react-native';
import React from 'react';
import BottomTabBar from '../components/BottomTabBar';

const AppScreen = () => {
  return (
    <View className="w-full space-y-4 flex-1 bg-red-500">
      <BottomTabBar />
    </View>
  );
};

export default AppScreen;

import {View, Text} from 'react-native';
import React from 'react';
// import CircularProgress from 'react-native-circular-progress-indicator';

const CircleProgressBar = () => {
  return (
    <View className="h-32 rounded-full">
      <View className="h-32 w-32 border-4 border-red-500 absolute rounded-full"></View>
      <View className="bg-white h-32 w-32 border border-red-500 absolute rounded-full"></View>
    </View>
  );
};

export default CircleProgressBar;

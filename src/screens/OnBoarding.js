import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  Animated,
  Easing,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useLayoutEffect, useEffect, useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
// import Lottie from 'react-lottie';
import LottieView from 'lottie-react-native';
import * as animationHello from '../../assets/animations/hello.json';

const OnBoardingScreen = () => {
  const navigation = useNavigation();
  const animation = useRef(null);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <>
      <View className="bg-white flex-1 items-bottom justify-center">
        <View className="bg-white flex-row justify-between p-4 items-center">
          <View className="flex-1">
            <Image
              source={require('../../assets/icons/apps.png')}
              className="rounded-lg w-10 h-10"
            />
          </View>
          <View className="w-32">
            <Image
              source={require('../../assets/icons/header_rui.jpg')}
              className="bg-gray-200 object-fit w-full h-6"
            />
          </View>
        </View>
        <View className="flex-1 w-full flex items-center justify-center">
          <LottieView
            autoPlay
            ref={animation}
            className="h-80"
            source={animationHello}
          />
          <Text className="text-center mt-8 font-bold text-2xl">
            Selamat datang di Apps Project
          </Text>
          <Text className="text-center text-lg mt-4 px-4">
            Silahkan login sekarang untuk menggunakan berbagai fitur di aplikasi
            dari Supraco Indonesia
          </Text>
        </View>
        <View className="w-full flex items-center pb-16 px-8">
          <TouchableOpacity
            className="bg-primary-600 w-full p-4 rounded-xl flex items-center"
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <Text className="text-white font-bold text-lg">Mulai</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default OnBoardingScreen;

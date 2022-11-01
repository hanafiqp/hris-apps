import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useLayoutEffect, useEffect, useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import LottieView from 'lottie-react-native';
import * as loginIllustration from '../../assets/animations/login.json';

const LoginScreen = () => {
  const navigation = useNavigation();
  const animation = useRef(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="flex-1">
      <View className="bg-white flex-1 items-bottom justify-center">
        <View className="bg-white flex-row justify-between p-4 items-center">
          <View className="flex-1 flex-row items-center">
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <ArrowLeftIcon color="gray" size={30} />
            </TouchableOpacity>
          </View>
          <View className="w-32">
            <Image
              source={require('../../assets/icons/header_rui.jpg')}
              className="bg-gray-200 object-fit w-full h-6"
            />
          </View>
        </View>
        <ScrollView className="flex-1">
          <View className="w-full flex items-center justify-center">
            <LottieView
              autoPlay
              ref={animation}
              className="h-60 mt-4"
              source={loginIllustration}
            />
            {/* FORM LOGIN */}
            <View className="flex-1 w-full px-8 pt-16 ">
              <Text className="font-bold text-4xl">Login</Text>
              <Text className="text-md">
                Silahkan masukan username dan password anda dengan benar
              </Text>
              <View className="py-8 flex space-y-4">
                <TextInput
                  className="bg-white border border-gray-400 rounded-lg px-4 focus:border-blue-500"
                  onChangeText={setUsername}
                  value={username}
                  placeholder="Username"
                />
                <TextInput
                  className="bg-white border border-gray-400 rounded-lg px-4"
                  onChangeText={setPassword}
                  value={password}
                  secureTextEntry={true}
                  autoComplete="password"
                  placeholder="Password"
                />
                <TouchableOpacity
                  onPress={() => {
                    console.log('lupa password euy');
                  }}>
                  <Text className="text-right text-primary-500 font-bold text-lg">
                    Lupa password ?
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className="bg-primary-600 w-full p-4 rounded-xl flex items-center"
                  onPress={() => {
                    console.log(username, password);
                    navigation.navigate('App');
                  }}>
                  <Text className="text-white font-bold text-lg">Masuk</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

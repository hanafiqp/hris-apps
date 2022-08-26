import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  PermissionsAndroid,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomStatusBar from '../../components/CustomStatusBar';
import {
  ArrowCircleLeftIcon,
  ArrowLeftIcon,
} from 'react-native-heroicons/outline';
import {useNavigation} from '@react-navigation/native';
import Geolocation from '@react-native-community/geolocation';

import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

const ClockInScreen = () => {
  const [userLongitude, setUserLongitude] = useState(0);
  const [userLatitude, setUserLatitude] = useState(0);
  const requestLocation = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
        {
          title: 'Get Location Permission',
          message: 'Untuk menggunakan fitur ini memerlukan lokasi anda.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Lokasi berhasil didapatkan');
        Geolocation.getCurrentPosition(info => {
          setUserLatitude(info.coords.latitude);
          setUserLongitude(info.coords.longitude);
        });
      } else {
        console.log('Lokasi tidak dapat diakses');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    requestLocation();
  }, []);

  const navigation = useNavigation();
  return (
    <>
      <CustomStatusBar bgColor="black" theme="light-content" />
      <View className="bg-black flex-1 ">
        <View className="flex-1 bg-white rounded-t-xl ">
          <View className="p-4 flex-row items-center space-x-2 justify-between border-b border-gray-200 pb-2">
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <ArrowLeftIcon color="gray" size={30} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                console.log(userLatitude, userLongitude);
              }}>
              <View className="bg-primary-600 rounded-full p-3 py-2">
                <Text className="text-white text-lg">Simpan</Text>
              </View>
            </TouchableOpacity>
          </View>

          <ScrollView className="">
            <View className="w-full h-96 rounded-xl">
              <MapView
                className="w-full h-full"
                // cacheEnabled={true}
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                  latitude: userLatitude,
                  longitude: userLongitude,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}>
                <Marker
                  coordinate={{
                    latitude: userLatitude,
                    longitude: userLongitude,
                  }}
                  title="Lokasi Anda saat ini"
                />
              </MapView>
            </View>
            <View className="bg-gray-200 w-full h-60 -mt-10 rounded-t-xl "></View>
          </ScrollView>
        </View>
      </View>
    </>
  );
};

export default ClockInScreen;

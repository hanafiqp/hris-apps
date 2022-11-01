import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  PermissionsAndroid,
  StyleSheet,
  TouchableHighlight,
  ToastAndroid,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import CustomStatusBar from '@components/CustomStatusBar';
import {
  ArrowCircleLeftIcon,
  ArrowLeftIcon,
  RefreshIcon,
} from 'react-native-heroicons/outline';
import {useNavigation} from '@react-navigation/native';
import Geolocation from '@react-native-community/geolocation';

import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import axios from 'axios';
import FormClockIn from './form';

const ClockInScreen = () => {
  const [userLongitude, setUserLongitude] = useState(0);
  const [userLatitude, setUserLatitude] = useState(0);
  const [dataLastAttendance, setDataLastAttendance] = useState();
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
        Geolocation.getCurrentPosition(
          info => {
            setUserLatitude(info.coords.latitude);
            setUserLongitude(info.coords.longitude);
          },
          error => {
            if (error.code === 2) {
              ToastAndroid.showWithGravityAndOffset(
                'Silahkan cek kembali pengaturan lokasi anda!',
                ToastAndroid.CENTER,
                ToastAndroid.TOP,
                0,
                10,
              );
            }
          },
        );
      } else {
        if (granted === PermissionsAndroid.RESULTS.DENIED) {
          ToastAndroid.show(
            'Location permission denied by user.',
            ToastAndroid.LONG,
          );
        } else if (granted === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
          ToastAndroid.show(
            'Location permission revoked by user.',
            ToastAndroid.LONG,
          );
        }
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const goToMyLocation = async () => {
    mapRef.current.animateCamera(
      {
        center: {
          latitude: userLatitude - 0.0013,
          longitude: userLongitude,
        },

        zoom: 18,
      },
      2000,
    );
  };

  const getLastAttendance = async () => {
    const url =
      'http://103.58.100.22/app/api-apps-project/index.php/attendance/App/info_attendance?id=100077';
    const response = await axios.get(url);
    const {data} = response.data;
    setDataLastAttendance(data);
  };

  useEffect(() => {
    requestLocation();
    goToMyLocation();
    getLastAttendance();
  }, []);

  useEffect(() => {
    goToMyLocation();
  }, [userLatitude, userLongitude]);

  const mapRef = useRef();
  const navigation = useNavigation();

  return (
    <>
      <CustomStatusBar bgColor="black" theme="light-content" />
      <View className="bg-black flex-1 ">
        {/* <View className="w-full flex items-center justify-center">
          <View className="bg-white/80 rounded-t-md w-10/12 h-3 ml-"></View>
        </View> */}
        <View className="flex-1  ">
          <View className="w-full relative flex-1">
            <View className="w-full flex-row justify-between p-4 absolute">
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                className="bg-white p-2 rounded-full flex items-center shadow-lg"
                style={{
                  shadowColor: '#000',
                }}>
                <ArrowLeftIcon color="black" />
              </TouchableOpacity>
              <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                className="bg-white p-2 rounded-full flex items-center shadow-lg"
                onPress={() => {
                  requestLocation();
                  goToMyLocation();
                }}
                style={{
                  shadowColor: '#000',
                }}>
                <RefreshIcon color="gray" />
              </TouchableHighlight>
            </View>
            <View className="w-full h-screen flex-1 justify-center rounded-t-3xl overflow-hidden -z-10">
              <MapView
                className="w-full h-full flex-1 rounded-3xl bg-gray-400"
                ref={mapRef}
                provider={PROVIDER_GOOGLE}
                loadingEnabled={true}
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

            <View className="flex-1 w-full -mt-10 rounded-t-xl p-4 absolute bottom-0">
              <View
                className="flex-1 rounded-3xl bg-white h-96 shadow-lg"
                style={{
                  shadowColor: '#6b7280',
                }}>
                <View className="bg-gray-100/50 p-4 rounded-t-3xl">
                  <Text className="text-gray-600 font-bold text-3xl">
                    {dataLastAttendance?.time}
                  </Text>
                  <Text className="text-gray-400 font-reguler">
                    {dataLastAttendance?.attendance_date_text}
                  </Text>
                </View>
                <FormClockIn />
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default ClockInScreen;

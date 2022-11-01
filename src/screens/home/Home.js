import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageBackground,
  RefreshControl,
  FlatList,
} from 'react-native';
import React, {useEffect} from 'react';
import {
  BellIcon,
  HomeIcon,
  LocationMarkerIcon,
  OfficeBuildingIcon,
} from 'react-native-heroicons/outline';

import {
  ChatAlt2Icon,
  QuestionMarkCircleIcon,
  LocationMarkerIcon as LocationSolid,
} from 'react-native-heroicons/solid';

import CustomStatusBar from '../../components/CustomStatusBar';
import ListPayslips from '../../components/ListPayslips';

import {AnimatedCircularProgress} from 'react-native-circular-progress';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const HomeScreen = () => {
  const [refreshing, setRefreshing] = React.useState(false);
  const circularProgress = React.createRef();

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => {
      setRefreshing(false);
    });
  }, []);

  const fill = (10 / 30) * 100;
  useEffect(() => {
    if (!refreshing) {
      if (circularProgress.current) {
        circularProgress.current.animate(fill, 500);
      }
    } else {
      if (circularProgress.current) {
        circularProgress.current.animate(0, 0);
      }
    }
  }, [refreshing]);

  return (
    <>
      <CustomStatusBar theme="dark-content" bgColor="white" />
      <SafeAreaView className="flex-1 bg-wite pb-4">
        {/* Header */}
        <View className="bg-white flex-row justify-between p-4 border-b border-gray-200">
          <View className="flex-row items-center">
            <Image
              source={{
                uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
              }}
              className="h-10 w-10 rounded-full"
            />
            <View className="px-2">
              <Text className="font-bold text-lg text-gray-600">
                Hanafiq Praditia
              </Text>
              <Text>Fullstack Developer</Text>
            </View>
          </View>
          <View className="relative">
            <BellIcon color="gray" size={30} />
            {/* <View className="flex h-3 w-3 absolute right-0 top-1">
            <View className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></View>
            <View className="relative inline-flex rounded-full h-2 w-2 bg-red-500 border border-gray-500"></View>
          </View> */}
          </View>
        </View>
        <ScrollView
          className="flex-1 space-y-4"
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          <View className="p-4 pb-0">
            <View className=" relative w-full rounded-3xl flex-row items-center space-x-3">
              <Image
                source={require('../../../assets/imgs/gradient.png')}
                className="absolute top-0 w-full rounded-3xl h-full"
              />
              <View className="w-36 p-4">
                <View className="flex-row items-center justify-center">
                  <View className="h-32 rounded-full bg-transparent w-32">
                    {/* Chart attendance */}
                    <AnimatedCircularProgress
                      ref={circularProgress}
                      size={130}
                      rotation={360}
                      width={15}
                      lineCap="round"
                      fill={fill}
                      tintColor="#3d5875"
                      onAnimationComplete={() =>
                        console.log('onAnimationComplete')
                      }
                      backgroundColor="#66bfff88">
                      {fill => (
                        <View>
                          <Text className="text-center text-white text-4xl font-thin">
                            {Math.round(30 * fill) / 100}
                          </Text>
                          <Text className="text-center text-white text-sm">
                            Attendance
                          </Text>
                        </View>
                      )}
                    </AnimatedCircularProgress>
                  </View>
                </View>
              </View>
              <View className="flex-1 p-4 space-y-2">
                <Text className="text-white">Presensi anda bulan ini</Text>
                <View className="flex-row items-center space-x-2">
                  <OfficeBuildingIcon size={25} color="white" />
                  <View className="flex-row items-end space-x-1">
                    <Text className="text-white font-bold text-2xl">10</Text>
                    <Text className="text-white text-xs  tracking-wider">
                      WFO
                    </Text>
                  </View>
                </View>
                <View className="flex-row items-center space-x-2">
                  <HomeIcon size={25} color="white" />
                  <View className="flex-row items-end space-x-1">
                    <Text className="text-white font-bold text-2xl">10</Text>
                    <Text className="text-white text-xs  tracking-wider">
                      WFH
                    </Text>
                  </View>
                </View>
                <View className="flex-row items-center space-x-2">
                  <LocationMarkerIcon size={25} color="white" />
                  <View className="flex-row items-end space-x-1">
                    <Text className="text-white font-bold text-2xl">10</Text>
                    <Text className="text-white text-xs  tracking-wider">
                      Geotagging
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View className="space-y-2 px-4">
            <View className="flex-row items-center space-x-4 justify-around flex-wrap">
              <View className="rounded-lg">
                <TouchableOpacity className="flex items-center jusitfy-center space-y-1">
                  <Image
                    source={require('../../../assets/icons/flat/icons-calendar.png')}
                    className="w-14 h-14"
                  />
                  <Text className="text-md">Kehadiran</Text>
                </TouchableOpacity>
              </View>
              <View className="rounded-lg">
                <TouchableOpacity className="flex items-center jusitfy-center space-y-1">
                  <Image
                    source={require('../../../assets/icons/flat/icon-overtime.png')}
                    className="w-14 h-14"
                  />
                  <Text className="text-md">SPKL</Text>
                </TouchableOpacity>
              </View>
              <View className="rounded-lg">
                <TouchableOpacity className="flex items-center jusitfy-center space-y-1">
                  <Image
                    source={require('../../../assets/icons/flat/icon-payslips.png')}
                    className="w-14 h-14"
                  />
                  <Text className="text-md">Payslip</Text>
                </TouchableOpacity>
              </View>
              <View className="rounded-lg">
                <TouchableOpacity className="flex items-center jusitfy-center space-y-1">
                  <Image
                    source={require('../../../assets/icons/flat/icon-approval.png')}
                    className="w-14 h-14"
                  />
                  <Text className="text-md">Ijin/Cuti</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View className="h-20 w-full ">
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              className="flex-row p-4 space-x-4">
              <View className="border border-gray-400 px-4 py-2 rounded-2xl flex-row items-center justify-between space-x-3">
                <View className="p-1 bg-red-500 rounded-full">
                  <LocationSolid size={20} color="white" />
                </View>
                <Text>Tambahkan Geotagging</Text>
              </View>
              <View className="border border-gray-400 px-4 py-2 rounded-2xl flex-row items-center justify-between space-x-3">
                <View className="p-1 bg-amber-500 rounded-full">
                  <ChatAlt2Icon size={20} color="white" />
                </View>
                <Text>Buat Feedback</Text>
              </View>
              <View className="border border-gray-400 px-4 py-2 rounded-2xl flex-row items-center justify-between space-x-3">
                <View className="p-1 bg-sky-500 rounded-full">
                  <QuestionMarkCircleIcon size={20} color="white" />
                </View>
                <Text>Bantuan</Text>
              </View>
              <View></View>
            </ScrollView>
          </View>
          <View className="w-full px-4 space-y-4">
            {/* Riwayat Terakhir */}
            <View className="flex-row items-center justify-between">
              <Text className="font-bold text-xl text-slate-600">
                Riwayat Terakhir Kehadiran
              </Text>
              <Text>Lihat Semua</Text>
            </View>

            <View className="bg-white w-full rounded-2xl p-4 space-y-4">
              <View className="rounded-2xl flex-row justify-between items-center">
                <Text className=" text-xl text-slate-500">
                  Kamis, 25 Agustus 2022
                </Text>
                <Text className="font-bold text-xl text-emerald-600 bg-emerald-200 px-4 py-1 rounded-xl">
                  WFO
                </Text>
              </View>
              <View className="">
                <View className="flex-row items-center">
                  <Text>Ditambahkan pada jam </Text>
                  <Text className="font-bold">09.21 WIB</Text>
                </View>
                <View className="flex-row items-center">
                  <Text>Saat anda berada di </Text>
                  <Text className="font-bold">
                    PT. Radiant Utama Interinsco Tbk
                  </Text>
                </View>
              </View>
              <View className="border-t-2 border-gray-100 pt-2">
                <TouchableOpacity className="flex-row">
                  <View className="bg-primary-600 rounded-xl px-4 py-2">
                    <Text className="text-white">Lihat Detail</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View className="w-full space-y-4 pb-32">
            {/* Riwayat Terakhir */}
            <View className="flex-row items-center px-4 justify-between">
              <Text className="font-bold text-xl text-slate-600">
                Riwayat Slip Gaji
              </Text>
              <Text>Lihat Semua</Text>
            </View>

            <ListPayslips />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {DownloadIcon} from 'react-native-heroicons/outline';
import {EyeIcon} from 'react-native-heroicons/solid';

const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);

const ListPayslips = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [data, setData] = useState([
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
  ]);

  const renderItem = ({item, index}) => {
    const styleMargin = index ? 'ml-0' : '';

    return (
      <View
        className={`bg-white w-44 rounded-2xl p-4 space-y-4 m-4 ${styleMargin}`}>
        <View className="rounded-2xl flex-row flex-wrap justify-between items-start">
          <Text className=" text-xl text-slate-500">
            Periode {`\n`}Agustus 2022
          </Text>

          <TouchableOpacity>
            <EyeIcon size={20} color="#64748b" />
          </TouchableOpacity>
        </View>
        <View className="">
          <View className="flex-row flex-wrap items-center">
            <Text>Total Pendapatan </Text>
            <Text className="font-bold text-xl">Rp******</Text>
          </View>
        </View>
        <View className="border-t-2 border-gray-100 pt-2 flex-row justify-between items-center">
          <TouchableOpacity className="flex-row items-center">
            <View className="bg-primary-600 rounded-xl px-4 py-2">
              <Text className="text-white">Lihat</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row">
            <DownloadIcon size={25} color="#64748b" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      extraData={selectedId}
    />
  );
};

export default ListPayslips;

import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Select, Box} from 'native-base';
import {CheckIcon} from 'react-native-heroicons/outline';

const FormClockIn = () => {
  const [service, setService] = useState('');
  return (
    <ScrollView className="p-4 space-y-4">
      <Box>
        <Select
          selectedValue={service}
          minWidth="200"
          accessibilityLabel="Choose Service"
          placeholder="Choose Service"
          _selectedItem={{
            bg: 'teal.600',
            endIcon: <CheckIcon size="5" />,
          }}
          mt={1}
          onValueChange={itemValue => setService(itemValue)}>
          <Select.Item label="UX Research" value="ux" />
          <Select.Item label="Web Development" value="web" />
          <Select.Item label="Cross Platform Development" value="cross" />
          <Select.Item label="UI Designing" value="ui" />
          <Select.Item label="Backend Development" value="backend" />
        </Select>
      </Box>
      <View className="bg-white h-40">
        <Text className="text-black">Tipe</Text>
        <View className="w-full bg-red-500"></View>
      </View>
      <View className="bg-white h-40">
        <Text className="text-black">asad</Text>
      </View>
      <View className="bg-white h-40">
        <Text className="text-black">asad</Text>
      </View>
      <View className="bg-white h-40">
        <Text className="text-black">asad</Text>
      </View>
      <View className="bg-white h-40">
        <Text className="text-black">asad</Text>
      </View>
      <View className="bg-white h-40">
        <Text className="text-black">asad</Text>
      </View>
      <View className="bg-white h-40">
        <Text className="text-black">asad</Text>
      </View>
      <View className="bg-white h-40">
        <Text className="text-black">asad</Text>
      </View>
      <View className="bg-white h-40">
        <Text className="text-black">asad</Text>
      </View>
      <View className="bg-white h-40">
        <Text className="text-black">asad</Text>
      </View>
      <View className="bg-white h-40">
        <Text className="text-black">asad</Text>
      </View>
    </ScrollView>
  );
};

export default FormClockIn;

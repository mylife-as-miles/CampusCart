import {View, Text} from 'react-native';
import React from 'react';

type Props = {};

const WishlistTab = (props: Props) => {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-2xl font-bold text-gray-800 mb-4">Favorite Foods</Text>
      <Text className="text-gray-600 text-center px-8">
        Your favorite dishes will appear here. Start browsing our delicious menu to save your favorites!
      </Text>
    </View>
  );
};

export default WishlistTab;

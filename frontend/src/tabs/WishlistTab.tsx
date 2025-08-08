import {View, Text} from 'react-native';
import React from 'react';

type Props = {};

const WishlistTab = (props: Props) => {
  return (
    <View className="flex-1 justify-center items-center bg-white">
            <Text className="text-2xl font-bold text-gray-800 mb-4">Favorite Foodstuffs</Text>
      <Text className="text-center text-gray-600 px-4">
        Your favorite foodstuffs will appear here. Start browsing our essential items to save your favorites!
      </Text>
    </View>
  );
};

export default WishlistTab;

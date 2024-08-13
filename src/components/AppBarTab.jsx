import React from 'react';
import { Pressable } from 'react-native';
import Text from './Text';

const AppBarTab = () => {
  return (
    <Pressable onPress={() => { console.log("Hi") }}>
        <Text fontSize="heading" fontWeight="bold" color="textPrimary">Repositories</Text>
    </Pressable>
  );
};

export default AppBarTab;

import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
  text: {
    paddingLeft: 10, // Add padding to the left side
  },
});

const AppBarTab = () => {
  return (
    <Pressable onPress={() => { console.log("Hi") }}>
        <Text style={styles.text} fontSize="heading" fontWeight="bold" color="textPrimary">Repositories</Text>
    </Pressable>
  );
};

export default AppBarTab;

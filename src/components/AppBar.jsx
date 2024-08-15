import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import theme from '../theme'; // Import the theme

const styles = StyleSheet.create({
    container: {
      paddingTop: Constants.statusBarHeight,
      backgroundColor: theme.colors.appBarColor,
      height: 120,
      // ...
    },
    // ...
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>{ <AppBarTab /> }</ScrollView>
    </View>
  );
};

export default AppBar;

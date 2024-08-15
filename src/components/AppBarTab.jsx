import React from 'react';
import { StyleSheet, View } from 'react-native';
import Text from './Text';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  text: {
    paddingLeft: 10,
  },
});

const AppBarTab = () => {
  return (
    <View style={styles.container}>
      <Link to="/">
        <Text style={styles.text} fontSize="heading" fontWeight="bold" color="textPrimary">
          Repositories
        </Text>
      </Link>
      <Link to="/signin">
        <Text style={styles.text} fontSize="heading" fontWeight="bold" color="textPrimary">
          Sign in
        </Text>
      </Link>
    </View>
  );
};

export default AppBarTab;

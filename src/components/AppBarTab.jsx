import React from 'react';
import { StyleSheet, View } from 'react-native';
import Text from './Text';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  text: {
    paddingLeft: 10, // Add padding to the left side
  },
});

const AppBarTab = () => {
  return (
    <View>
      {/* <Pressable onPress={() => { console.log("Hi") }}>
          <Text style={styles.text} fontSize="heading" fontWeight="bold" color="textPrimary">
            Repositories
          </Text>
      </Pressable> */}
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

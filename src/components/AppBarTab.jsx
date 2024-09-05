import React from 'react';
import { StyleSheet, View } from 'react-native';
import Text from './Text';
import { Link } from 'react-router-native';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../graphql/queries';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  text: {
    paddingLeft: 10,
  },
});

const AppBarTab = () => {
  const { data } = useQuery(GET_ME);

  const isAuthenticated = !!data?.me;

  return (
    <View style={styles.container}>
      <Link to="/">
        <Text style={styles.text} fontSize="heading" fontWeight="bold" color="textPrimary">
          Repositories
        </Text>
      </Link>
      {isAuthenticated ? (
        <>
          <Link to="/review">
            <Text style={styles.text} fontSize="heading" fontWeight="bold" color="textPrimary">
              Create a review
            </Text>
          </Link>
          <Link to="/ownreviews">
            <Text style={styles.text} fontSize="heading" fontWeight="bold" color="textPrimary">
              My Reviews
            </Text>
          </Link>
          <Link to="/signout">
            <Text style={styles.text} fontSize="heading" fontWeight="bold" color="textPrimary">
              Sign out
            </Text>
          </Link>
        </>
      ) : (
        <>
          <Link to="/signin">
            <Text style={styles.text} fontSize="heading" fontWeight="bold" color="textPrimary">
              Sign in
            </Text>
          </Link>
          <Link to="/signup">
            <Text style={styles.text} fontSize="heading" fontWeight="bold" color="textPrimary">
              Sign up
            </Text>
          </Link>
        </>
      )}
    </View>
  );
};

export default AppBarTab;

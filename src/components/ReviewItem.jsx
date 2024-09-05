import React from "react";
import { View, StyleSheet } from "react-native";
import Text from "./Text";
import theme from "../theme";
import { format } from 'date-fns';


const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    padding: 10,
    marginVertical: 3,
    marginHorizontal: 3,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "grey",
  },
  header: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  ratingContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: theme.colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ratingText: {
    color: theme.colors.textPrimary,
    fontSize: 20,
    fontWeight: 'bold',
  },
  mainInfo: {
    flex: 1,
    marginLeft: 15,
    justifyContent: 'center',
  },
  username: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  date: {
    color: theme.colors.textSecondary,
    marginBottom: 10,
  },
  reviewText: {
    color: theme.colors.textPrimary,
  },
  separator: {
    height: 1,
    backgroundColor: theme.colors.separator,
  }
});

const ReviewItem = ({ item, own_review = false }) => {
  const formattedDate = format(new Date(item.createdAt), 'dd.MM.yyyy');
  // console.log("ITEM RECEIVED IN REVIEWITEM", item);
  return (
    <View testID="reviewItem" style={styles.container}>
      <View style={styles.header}>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>{item.rating}</Text>
        </View>
        <View style={styles.mainInfo}>
          <Text style={styles.username}>
            {own_review ? item.repository.fullName : item.user.username}
          </Text>
          <Text style={styles.date}>{formattedDate}</Text>
          <Text style={styles.reviewText}>{item.text}</Text>
        </View>
      </View>
      <View style={styles.separator} />
    </View>
  );
};

export default ReviewItem;
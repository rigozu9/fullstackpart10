import React from "react";
import { View, Image, StyleSheet, Button } from "react-native";
import Text from "./Text";
import theme from "../theme";
import * as Linking from 'expo-linking';


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
  mainInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  languageContainer: {
    backgroundColor: theme.colors.secondary,
    borderRadius: 4,
    paddingVertical: 3,
    paddingHorizontal: 6,
    alignSelf: 'flex-start',
    marginTop: 5,
  },
  languageText: {
    fontSize: 12,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
  },
  statLabel: {
    marginTop: 4,
  },
  buttonContainer: {
    marginTop: 15,
    backgroundColor: '#0366d6',
    borderRadius: 5,
    overflow: 'hidden',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

const formatThousands = value => {
  return value >= 1000 ? `${(value / 1000).toFixed(1)}k` : String(value);
};

const RepositoryItem = ({ item, showGitHubButton = false }) => {
  const openGitHub = () => {
    Linking.openURL(item.url);
  };

  return (
    <View testID="repositoryItem" style={styles.container}>
      <View style={styles.header}>
        <Image
          style={theme.avatarImage}
          source={{ uri: item.ownerAvatarUrl }}
        />
        <View style={styles.mainInfo}>
          <Text fontWeight="bold" fontSize="subheading" color="textPrimary">{item.fullName}</Text>
          <Text color="textSecondary">{item.description}</Text>
          <View style={styles.languageContainer}>
            <Text color="textPrimary" style={styles.languageText}>{item.language}</Text>
          </View>
        </View>
      </View>
      
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text fontWeight="bold" color="textPrimary">{formatThousands(item.stargazersCount)}</Text>
          <Text style={styles.statLabel} color="textSecondary">Stars</Text>
        </View>
        <View style={styles.statItem}>
          <Text fontWeight="bold" color="textPrimary">{formatThousands(item.forksCount)}</Text>
          <Text style={styles.statLabel} color="textSecondary">Forks</Text>
        </View>
        <View style={styles.statItem}>
          <Text fontWeight="bold" color="textPrimary">{formatThousands(item.reviewCount)}</Text>
          <Text style={styles.statLabel} color="textSecondary">Reviews</Text>
        </View>
        <View style={styles.statItem}>
          <Text fontWeight="bold" color="textPrimary">{formatThousands(item.ratingAverage)}</Text>
          <Text style={styles.statLabel} color="textSecondary">Rating</Text>
        </View>
      </View>
      {showGitHubButton && (
        <View style={styles.buttonContainer}>
          <Button
            title="Open in GitHub"
            onPress={openGitHub}
            color="#ffffff"
          />
        </View>
      )}
    </View>
  );
};


export default RepositoryItem;

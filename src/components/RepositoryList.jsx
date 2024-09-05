import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import RepositoryItem from './RepositoryItem';
import RepositorySorter from './RepositorySorter'
import useRepositories from '../hooks/useRepositories';
import theme from '../theme';
import { useNavigate } from 'react-router-native';
import { useState } from 'react';

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: theme.colors.appBarColor
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories, setSortCriteria, selectedOption, setSelectedOption, onEndReach }) => {
  const navigate = useNavigate();
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <Pressable onPress={() => navigate(`/repository/${item.id}`)}>
          <RepositoryItem item={item} />
        </Pressable>
      )}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={() => (
        <RepositorySorter 
          setSortCriteria={setSortCriteria}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      )}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  );
};
const RepositoryList = () => {
  const [sortCriteria, setSortCriteria] = useState({
    orderBy: 'CREATED_AT',
    orderDirection: 'DESC',
  });

  const [selectedOption, setSelectedOption] = useState('Latest repositories');

  const { repositories, fetchMore } = useRepositories({
    first: 7,
    sortCriteria
  });

  const onEndReach = () => {
    console.log("reached the end");
    fetchMore();
  };

  return ( 
    <RepositoryListContainer 
      repositories={repositories} 
      setSortCriteria={setSortCriteria}
      selectedOption={selectedOption}
      setSelectedOption={setSelectedOption}
      onEndReach={onEndReach}
    />
  );
};

export default RepositoryList;
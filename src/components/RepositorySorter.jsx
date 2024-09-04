import { useState } from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { Menu, Divider } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import Text from './Text';
import theme from '../theme';

const RepositorySorter = ({ setSortCriteria, selectedOption, setSelectedOption }) => {
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const handleSortOption = (option, orderBy, orderDirection) => {
    setSelectedOption(option);
    setSortCriteria({ orderBy, orderDirection });
    closeMenu();
  };

  return (
    <View style={styles.container}>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <Pressable onPress={openMenu} style={styles.pressable}>
            <Text style={styles.buttonText}>Sort by: {selectedOption}</Text>
            <MaterialIcons name="arrow-drop-down" size={24} color="black" />
          </Pressable>
        }
      >
        <Menu.Item
          onPress={() => handleSortOption('Latest repositories', 'CREATED_AT', 'DESC')}
          title="Latest repositories"
        />
        <Divider />
        <Menu.Item
          onPress={() => handleSortOption('Highest rated repositories', 'RATING_AVERAGE', 'DESC')}
          title="Highest rated repositories"
        />
        <Divider />
        <Menu.Item
          onPress={() => handleSortOption('Lowest rated repositories', 'RATING_AVERAGE', 'ASC')}
          title="Lowest rated repositories"
        />
      </Menu>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
  pressable: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    height: 70,
    borderColor: "grey",
    borderRadius: 5,
    backgroundColor: theme.colors.primary,
  },
  buttonText: {
    fontSize: 16,
    marginRight: 5,
  },
});

export default RepositorySorter;

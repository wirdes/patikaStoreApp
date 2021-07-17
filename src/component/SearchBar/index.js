import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Ara..."
          placeholderTextColor={'#BBBBBB'}
          style={styles.searchInput}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  inputContainer: {
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#eceff1',
  },
  searchInput: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#eceff1',
    borderRadius: 10,
  },
});

export {SearchBar};

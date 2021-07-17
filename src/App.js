import React from 'react';
import {Cart, SearchBar} from './component';
import data from './data/data.json';
import {SafeAreaView, Text, FlatList, StyleSheet} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <Text style={styles.title}>PATIKASTORE</Text>
      <SearchBar />
      <FlatList
        numColumns={2}
        keyExtractor={item => item.id.toString()}
        data={data}
        renderItem={({item}) => <Cart products={item} />}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 35,
    color: 'purple',
  },
});

export {App};

import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';

const Cart = ({products}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: products.imgURL}} />
      <View style={styles.innerContainer}>
        <Text style={styles.title}>{products.title}</Text>
        <Text style={styles.price}>{products.price}</Text>
        {products.inStock === false ? (
          <Text style={styles.inStock}>Stokta Yok</Text>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
    padding: 15,
    margin: 10,
    borderRadius: 10,
  },
  image: {
    height: Dimensions.get('window').height / 4,
    width: '100%',
    borderRadius: 10,
    resizeMode: 'contain',
  },
  innerContainer: {
    padding: 5,
  },
  title: {
    fontWeight: '700',
    fontSize: 20,
  },
  price: {
    marginTop: 5,
    color: '#333333',
    fontWeight: 'bold',
    fontSize: 17,
  },
  inStock: {
    color: 'red',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 17,
  },
});

export {Cart};

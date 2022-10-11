import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import cart from './gambar/cart.jpg';

const PositionReactNative = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>Materi Position</Text>
      <View style={styles.cartWrapper}>
        <Image source={cart} style={styles.iconCart} />
        <Text style={styles.notif}>10</Text>
      </View>
      <Text style={styles.text}>Keranjang Belanja Anda</Text>
    </View>
  );
};

export default PositionReactNative;

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
    alignItems: 'center',
  },

  cartWrapper: {
    borderWidth: 1,
    borderColor: 'blue',
    width: 73,
    height: 73,
    borderRadius: 73 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },

  iconCart: {
    width: 50,
    height: 50,
  },

  text: {
    fontSize: 12,
    color: 'black',
    fontWeight: '700',
    marginTop: 10,
  },

  notif: {
    fontSize: 12,
    color: 'white',
    backgroundColor: 'green',
    padding: 5,
    borderRadius: 25,
    width: 24,
    height: 24,
    position: 'absolute',
    top: 0,
    right: 0,
  },
});

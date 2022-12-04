import React, {Component, useState} from 'react';
import {StyleSheet, Text, View, Image, ScrollView, Button} from 'react-native';
import cart from '../../assets/icons/cart.jpg';

const Cart = props => {
  return (
    <View>
      <View style={styles.cartWrapper}>
        <Image source={cart} style={styles.iconCart} />
        <Text style={styles.notif}>{props.quantity}</Text>
      </View>
      <Text style={styles.text}>Keranjang Belanja Anda</Text>
    </View>
  );
};

export default Cart;

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

import React, {Component, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
  TouchableOpacity,
} from 'react-native';
import ayam from '../../assets/image/ayam.jpg';

const Product = props => {
  return (
    <View>
      <View style={styles.wrapper}>
        <Image source={ayam} style={styles.imageProduct} />
        <Text style={styles.productName}>Ayam goreng Nikmat</Text>
        <Text style={styles.productPrice}>Rp.20000</Text>
        <Text style={styles.location}>Banjarnegara</Text>

        <TouchableOpacity onPress={props.onButtonPress}>
          <View style={styles.buttonWrapper}>
            <Text style={styles.buttonText}> BELI SEKARANG</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  wrapper: {
    padding: 12,
    backgroundColor: '#f2f2f2',
    width: 212,
    borderRadius: 8,
  },
  imageProduct: {
    width: 188,
    height: 107,
    borderRadius: 8,
  },
  productName: {
    fontSize: 12,
    fontWeight: '300',
    marginTop: 16,
  },
  productPrice: {
    fontSize: 12,
    fontWeight: '300',
    color: 'orange',
    marginTop: 16,
  },
  location: {
    fontSize: 12,
    fontWeight: '300',
    marginTop: 16,
  },
  buttonWrapper: {
    backgroundColor: 'green',
    paddingTop: 6,
    paddingBottom: 6,
    borderRadius: 25,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '300',
    color: 'white',
    textAlign: 'center',
  },
});

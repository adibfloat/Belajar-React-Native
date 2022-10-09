import React, {Component} from 'react';
import {View, Text, Image, TextInput, StyleSheet} from 'react-native';
import ayam from '../gambar/ayam.jpg';

const StylingReactNativeComponent = () => {
  return (
    <View>
      <Text style={styles.text}> Ayam Bakar </Text>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'lime',
          borderWidth: 2,
          borderColor: 'blue',
          marginTop: 20,
          marginLeft: 20,
        }}
      />

      <View
        style={{
          padding: 12,
          backgroundColor: 'silver',
          width: 212,
          borderRadius: 8,
        }}>
        <Image
          source={ayam}
          style={{width: 188, height: 107, borderRadius: 8}}
        />

        <Text
          style={{
            fontSize: 12,
            fontWeight: '300',
            marginTop: 16,
          }}>
          Ayam goreng Nikmat
        </Text>

        <Text
          style={{
            fontSize: 12,
            fontWeight: '300',
            color: 'orange',
            marginTop: 16,
          }}>
          Rp.20000
        </Text>

        <Text
          style={{
            fontSize: 12,
            fontWeight: '300',
            marginTop: 16,
          }}>
          Banjarnegara
        </Text>

        <View
          style={{
            backgroundColor: 'green',
            paddingTop: 6,
            paddingBottom: 6,
            borderRadius: 25,
            marginTop: 20,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '300',
              color: 'white',
              textAlign: 'center',
            }}>
            {' '}
            BELI SEKARANG
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: '600',
    color: 'aquamarine',
  },
});

export default StylingReactNativeComponent;

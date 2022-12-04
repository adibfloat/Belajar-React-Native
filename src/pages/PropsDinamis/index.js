import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import ayam from '../../assets/image/ayam.jpg';

const Story = props => {
  return (
    <View style={{alignItems: 'center', marginRight: 20}}>
      <Image
        source={props.gambar}
        style={{height: 70, width: 70, borderRadius: 50}}
      />
      <Text style={{maxWidth: 80, textAlign: 'center'}}>{props.judul}</Text>
    </View>
  );
};

const PropsDinamis = () => {
  return (
    <View>
      <Text>Materi Props Dinamis</Text>
      <ScrollView horizontal>
        <View style={{flexDirection: 'row'}}>
          <Story judul="Youtube Channel" gambar={ayam} />
          <Story judul="Makan Ayam" gambar={ayam} />
        </View>
      </ScrollView>
    </View>
  );
};

export default PropsDinamis;

const styles = StyleSheet.create({});

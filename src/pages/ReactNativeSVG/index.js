import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import IlustrationMyApp from '../../assets/image/undraw_halloween_re_2kq1.svg';

const ReactNativeSVG = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>
        Materi menggunakan file SVG didalam React Native
      </Text>
      <IlustrationMyApp width={124} height={125} />
    </View>
  );
};

export default ReactNativeSVG;

const styles = StyleSheet.create({
  container: {padding: 20},
  textTitle: {textAlign: 'center'},
});

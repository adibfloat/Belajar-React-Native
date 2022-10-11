import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';

import SampleComponent from './assets/SampleComponent';
import StylingReactNativeComponent from './assets/StylingReactNativeComponent';
import MateriFlexBox from './assets/MateriFlexBox';
import PositionReactNative from './PositionReactNative';

const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent />
        <StylingReactNativeComponent />
        <MateriFlexBox /> */}
        <PositionReactNative />
      </ScrollView>
    </View>
  );
};

export default App;

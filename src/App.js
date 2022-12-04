import React from 'react';
import {ScrollView, View} from 'react-native';

import SampleComponent from './pages/SampleComponent';
import StylingComponent from './pages/StylingComponent';
import FlexBox from './pages/FlexBox';
import Position from './pages/Position';
import PropsDinamis from './pages/PropsDinamis';
import StateDinamis from './pages/StateDinamis';
import Communication from './pages/Communication';
import ReactNativeSVG from './pages/ReactNativeSVG';

const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent />
        <StylingComponent /> */}
        {/* <FlexBox /> */}
        {/* <Position /> */}
        {/* <PropsDinamis /> */}
        {/* <StateDinamis /> */}
        {/* <Communication /> */}
        <ReactNativeSVG />
      </ScrollView>
    </View>
  );
};

export default App;

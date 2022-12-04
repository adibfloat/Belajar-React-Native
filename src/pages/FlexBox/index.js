import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

import ayam from '../../assets/image/ayam.jpg';

class FlexBox extends Component {
  constructor(props) {
    super(props);
    console.log('===> Constructor');
  }

  componentDidMount() {
    console.log('===> Component Did Mount');
  }

  componentDidUpdate() {
    console.log('===> Component Did Update');
  }

  render() {
    console.log('===> Render');
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'grey',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
          }}>
          <View style={{backgroundColor: 'red', flex: 1, height: 50}} />
          <View style={{backgroundColor: 'yellow', flex: 1, height: 100}} />
          <View style={{backgroundColor: 'green', flex: 1, height: 150}} />
          <View style={{backgroundColor: 'purple', flex: 1, height: 200}} />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text>Beranda</Text>
          <Text>Video</Text>
          <Text>Playlist</Text>
          <Text>Komunitas</Text>
          <Text>Channel</Text>
          <Text>Tentang</Text>
        </View>

        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
          <Image
            source={ayam}
            style={{width: 100, height: 100, borderRadius: 50, marginRight: 12}}
          />
          <View>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Ayam Goreng</Text>
            <Text>Rp.15000</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default FlexBox;

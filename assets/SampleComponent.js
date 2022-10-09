import React, {Component} from "react";
import { 
  View, 
  Text, 
  Image, 
  TextInput, 
  StyleSheet 
} from "react-native";

const SampleComponent = () => {
  return (
  <View> 
    <View style={{width:80, height:80, backgroundColor:'#0abde3'}}/>
    <Text>Hello World Ke Jalan-jalan</Text>
    <Adib /> 
    <Text>Jalan-jalan ke pasar </Text>
    {/* <photo /> */}
    <TextInput style={{borderWidth: 2}} />
    <BoxGreen />
    <Warna />
  </View>
  )
}

const Adib = () => {
  return <Text> Adib Niatno </Text>
  };

const photo = () => {
  return <Image/>
}

class BoxGreen extends Component{
  render(){
    return <Text>Ini komponen dari kelas</Text>
  }
}


class Warna extends Component{
  render(){
    return (
    <View>
      <View style={{width:80, height:80, backgroundColor:'aquamarine', borderRadius:50}}/>
      <Text style={{fontSize:25, color: 'red'}}>Warna </Text>
    </View>
    )
  }
}

export default SampleComponent;
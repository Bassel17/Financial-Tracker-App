import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {StyleSheet, View} from 'react-native';
import { Input,Button,Text } from 'react-native-elements';


export default class Groceries extends React.Component{

  render(){
    return(
    <View style = {{color:"red",width:"50%"}}>
      <Button
      title="button"
      buttonStyle={{
        width:"50%",
        backgroundColor:"black"
      }}
      containerStyle={{
        marginLeft:"25%",
        width:"100%",
        display:'flex',
        alignContent:'center'
      }}
    />
    </View>
    );
  }
}
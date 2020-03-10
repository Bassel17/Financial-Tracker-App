import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input,Button } from 'react-native-elements';
import {StyleSheet, View} from 'react-native';

export default class LoginPage extends React.Component{
  render(){
    return (
      <View style= {styles.container}>
        <Input
          placeholder='Email'
          inputContainerStyle={{
            margin:20
          }}
          rightIcon={
              <Icon
              name='user'
              size={24}
              color='black'
              />
            }
        />
  
      <Input
          placeholder='Password'
          inputContainerStyle={{
            margin:20
          }}
          secureTextEntry={true}
          rightIcon={
              <Icon
              name='lock'
              size={24}
              color='black'
              />
            }
        />

    <Button
      title="Login"
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
    )
  }
}
const styles = StyleSheet.create({
  container:{
    width:"100%"
  }
});
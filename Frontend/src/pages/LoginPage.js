import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input,Button,Text } from 'react-native-elements';
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
    <View style={{
      display:'flex',
      flexDirection:'row'
    }}>
      <Text style={styles.apply}>
        Forgot password ?
      </Text>
      <Button type ="clear" title="click here"/>
    </View>
    <Button
      title="Sign up"
      type="clear"
      buttonStyle={{
        width:"50%",
        backgroundColorst:"black"
      }}
      containerStyle={{
        marginLeft:"25%",
        width:"100%",
        position:"absolute",
        top:300
      }}
    />
    </View>
    )
}
}
const styles = StyleSheet.create({
  container:{
    width:"100%",
    display:"flex"
  },
  apply:{
    marginLeft:"25%",
    marginTop:10
  }
});
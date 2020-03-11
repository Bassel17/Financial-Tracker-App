import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input,Button,Text } from 'react-native-elements';
import {StyleSheet, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default class LoginPage extends React.Component{
  constructor(props){
    super(props);
    this.state={
      userEmail:"",
      userPassword:""
    }
  }

  handleUserEmailChange = (event) => {
    this.setState({
      userEmail:event.target.value
    });
  }

  handleUserPasswordChange = (event) => {
    this.setState({
      userPassword:event.target.value
    })
  }

  render(){
    return (
      <View style= {styles.container}>
        <Text h1 style={{
          textAlign:"center",
          marginBottom:"20%"
        }}>
          FINANCIAL TRACKER
        </Text>
        <Input
          placeholder='Email'
          value={this.state.userEmail}
          onChange={this.handleUserEmailChange}
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
          value={this.state.userPassword}
          onChange={this.handleUserPasswordChange}
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
      onPress={() => this.props.navigation.navigate('Empty')}
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
          display:"flex",
          width:"100%",
          marginTop:50,
          alignItems:"center",
          alignSelf:"flex-end"
        }}
      />
    </View>
    )
}
}
const styles = StyleSheet.create({
  container:{
    width:"100%",
    height:"100%",
    display:"flex",
    alignContent:"center",
    justifyContent:"center"
  },
  apply:{
    marginLeft:"25%",
    marginTop:10
  }
});
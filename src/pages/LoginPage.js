import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input,Button,Text } from 'react-native-elements';
import {StyleSheet, View} from 'react-native';
import Validation from '../helpers/Validation';

export default class LoginPage extends React.Component{
  constructor(props){
    super(props);
    this.state={
      userEmail:"",
      userPassword:""
    }
  }

  handleUserEmailChange = (text) => {
    this.setState({
      userEmail:text
    });
  }

  handleUserPasswordChange = (text) => {
    this.setState({
      userPassword:text
    })
  }

  storeToken = async (token) => {
    try{
      const response = await SecureStore.setItemAsync("token", token);
      console.log(response);
    }catch(error){
      console.log(error);
    }
  }

  handleLogin = async () =>{
    const userCredentials = {
      email: this.state.userEmail,
      password: this.state.userPassword
    }
    const userValidation = new Validation(userCredentials);
    if(userValidation.checkEmail() && userValidation.checkPassword()){
      try{
        const response = await fetch('https://wallet-keeper.herokuapp.com/api/login',{
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userCredentials)
        });
        const result = await response.json();
        this.storeToken(result.access_token);
      }catch(error){
        console.log(error);
      }
      this.props.navigation.navigate('Empty');
    }else{
      console.log("error");
    }
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
          onChangeText={this.handleUserEmailChange}
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
          onChangeText={this.handleUserPasswordChange}
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
      onPress={this.handleLogin}
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
          width:"50%"
        }}
      
        containerStyle={{
          display:"flex",
          width:"100%",
          marginTop:50,
          alignItems:"center",
          alignSelf:"flex-end"
        }}
        onPress={() => this.props.navigation.navigate('SignupPage')}
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
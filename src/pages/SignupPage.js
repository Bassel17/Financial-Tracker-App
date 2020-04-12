import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input,Button} from 'react-native-elements';
import {View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Validation from '../helpers/Validation';
import * as SecureStore from 'expo-secure-store';


export default class SignupPage extends React.Component{

  constructor(props){
    super(props);
    this.state={
      userEmail:"",
      username:"",
      userPassword:"",
      userConfirmPassword:"",
      userCurrency:{
        code:'LBP',
        index:0
      }
    }
  }
  handleUserEmailChange = (text) => {
    this.setState({
      userEmail:text
    });
  }
  handleUsernameChange = (text) => {
    this.setState({
      username:text
    })
  }
  handleUserPasswordChange = (text) => {
    this.setState({
      userPassword:text
    })
  }

  handleUserConfirmPasswordChange = (text) => {
    this.setState({
      userConfirmPassword:text
    })
  }
  handleCurrencyChange = (selection, row) => {
    this.setState({userCurrency: {
      code:selection,
      index:row
    }})
  }

  storeToken = async (token) => {
    try{
      const response = await SecureStore.setItemAsync("token", token);
      console.log(response);
      return response
    }catch(error){
      console.log(error);
    }
  }
 
  isValid = () => {
    const userCredentials = {
      userEmail: this.state.userEmail,
      userPassword: this.state.userPassword
    }
    const userValidation = new Validation(userCredentials);
    return userValidation.checkEmail() && userValidation.checkPassword();
  }

  registerUser = async ()=>{
    const data = {
      name:this.state.username,
      email:this.state.userEmail,
      password:this.state.userPassword,
      currency_id:1
    }
    if(this.isValid()){
      try{
        const response = await fetch('https://wallet-keeper.herokuapp.com/api/signup',{
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
        });
        const result = await response.json();
        const storedToken = await this.storeToken(result.access_token);
        const token = await SecureStore.getItemAsync("token", token);
      }catch(error){
        console.log(error);
      }
    }else{
      console.log("didn't come threw")
    }
  }
   

  render(){
    return (
      <View style = {{width:"100%"}}>
      
      <Input
        placeholder='Email'
        value={this.state.userEmail}
        onChangeText={this.handleUserEmailChange}
        inputContainerStyle={{
          margin:20,
          paddingTop:"30%",
          paddingBottom:"10%"
          
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
        placeholder='name'
        value={this.state.username}
        onChangeText={this.handleUsernameChange}
        inputContainerStyle={{
          margin:20
        }}
        secureTextEntry={false}
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
      <Input
        placeholder='Confirm Password'
        value={this.state.userConfirmPassword}
        onChangeText={this.handleUserConfirmPasswordChange}
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
      <View style = {{width:"50%",paddingLeft:70 , paddingBottom:40}}>
      <RNPickerSelect
             placeholder = {{}}

            onValueChange={(value,index) => this.handleCurrencyChange(value,index)}
            items={[
                { label: 'LBP', value: 'LBP' },
                { label: 'USD', value: 'USD' },
                { label: 'EUR', value: 'EUR' },
            ]}
        />
        </View>
        <View>
      <Button
        title="Sign up"
        type="clear"
        buttonStyle={{
          width:"50%"
        }}
        containerStyle={{
          display:"flex",
          width:"100%",
          marginTop:30,
          alignItems:"center",
          alignSelf:"flex-end"
        }}
        onPress={()=>this.registerUser()}
      />
    </View>

  
  </View>
  
);
}
}
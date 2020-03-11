import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input,Button,Text } from 'react-native-elements';
import {StyleSheet, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';


export default class SignupPage extends React.Component{

  constructor(props){
    super(props);
    this.state={
      userEmail:"",
      username:"",
      userPassword:"",
      userConfirmPassword:"",
      userCurrency:''
    }
    
   
  }
  handleUserEmailChange = (event) => {
    this.setState({
      userEmail:event.target.value
    });
  }
  handleUsernameChange = (event) => {
    this.setState({
      username:event.target.value
    })
  }
  handleUserPasswordChange = (event) => {
    this.setState({
      userPassword:event.target.value
    })
  }

  handleUserConfirmPasswordChange = (event) => {
    this.setState({
      userConfirmPassword:event.target.value
    })
  }
  handleCurrencyChange = (selection, row) => {
    this.setState({userCurrency: data[selection][row]})
  }
 

   

  render(){
    return (
      <View style = {{width:"100%"}}>
      
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
        placeholder='name'
        value={this.state.username}
        onChange={this.handleUsernameChange}
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
      <Input
        placeholder='Confirm Password'
        value={this.state.userConfirmPassword}
        onChange={this.handleUserConfirmPasswordChange}
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
      <View style = {{width:"50%",paddingLeft:50 , paddingBottom:50}}>
<RNPickerSelect
             placeholder = {{}}

            onValueChange={(value) => console.log(value)}
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
          width:"50%",
          backgroundColorst:"black"
        }}
        containerStyle={{
          display:"flex",
          width:"100%",
          marginTop:30,
          alignItems:"center",
          alignSelf:"flex-end"
        }}
      />
    </View>

  
  </View>
  
);
}
}
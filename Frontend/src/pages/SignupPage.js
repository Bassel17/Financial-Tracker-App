import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input,Button} from 'react-native-elements';
import {View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';


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
      />
    </View>

  
  </View>
  
);
}
}
import React, { Component } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input,Header } from 'react-native-elements';
//import { Container, Header, Title, Button, Left, Right, Body, Icon } from 'native-base';



export default class SettingPage extends Component {

  _onPresssave() {
    alert('Are you sure you want save this card?')
  }
  _onPressButton() {
    alert('Are you sure you want discard this card?')
  } 


  constructor(props){
    super(props);
    this.state={
      username:"",
      userEmail:"",
      userPassword:"",
      userRepeatPassword:"",
      Setting:""


    }
  }

  handleUsernameChange = (event) => {
    this.setState({
      username:event.target.value
    });
  }
  handleUserEmailChange = (event) => {
    this.setState({
      userEmail:event.target.value
    });
  }
  handleUserPasswordChange = (event) => {
    this.setState({
      userPassword:event.target.value
    });
  }
  handleUserRepeatPasswordChange = (event) => {
    this.setState({
      userRepeatPassword:event.target.value
    });
  }

  render() {
    return (
      
      <View style={styles.container}>


        

        <Input
        placeholder='Username:'
        value={this.state.username}
        onChange={this.handleUsernameChange}
        inputContainerStyle={{
          marginBottom:"50%"
        }}
        secureTextEntry={false}
        rightIcon={
            <Icon
            size={24}
            color='black'
            />
          }
      />


<Input
        placeholder='Email:'
        value={this.state.userEmail}
        onChange={this.handleUserEmailChange}
        inputContainerStyle={{
          marginBottom:60
        }}
        secureTextEntry={false}
        rightIcon={
            <Icon
            size={24}
            color='black'
            />
          }
      />


<Input
        placeholder='Password:'
        value={this.state.userPassword}
        onChange={this.handleUserPasswordChange}
        inputContainerStyle={{
          marginBottom:60
        }}
        secureTextEntry={true}
        rightIcon={
            <Icon
            size={24}
            color='black'
            />
          }
      />

<Input
        placeholder='Repeat Password:'
        value={this.state.userRepeatPassword}
        onChange={this.handleUserRepeatPasswordChange}
        inputContainerStyle={{
          marginBottom:60
        }}
        secureTextEntry={true}
        rightIcon={
            <Icon
            size={24}
            color='black'
            />
          }
      />



        
        <View style={styles.alternativeLayoutButtonContainer}>
      
          <Button
            onPress={this._onPressButton}
            title="discard"
            color="black"
          />
          <Button
            onPress={this._onPresssave}
            title="save"
            //color="#841584"
            color="black"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
   color:"black",
   backgroundColor:"grey"
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    marginRight: "50%",
    marginLeft: "10%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    
    
  }
});




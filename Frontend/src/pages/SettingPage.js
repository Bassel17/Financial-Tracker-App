import React, { Component } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input,Header } from 'react-native-elements';
//import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


export default class SettingPage extends Component {
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


<Header
  placement=""
  leftComponent={{ icon: 'bars', color: 'white',backgroundcolor:'black' ,paddingTop:'100'}}
  centerComponent={{ text: 'Setting', style: { color: 'black'} }}
  rightComponent={{ icon: 'bars', color: 'grey' ,backgroundcolor:'black',paddingTop:'100'}}
/>
        

        <Input
        placeholder='Username:'
        value={this.state.username}
        onChange={this.handleUsernameChange}
        inputContainerStyle={{
          marginBottom:50
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
            title="save"
            alternativeLayoutButtonContainer={{
              backgroundcolor:"black"
            }}
            
          />
          <Button
            onPress={this._onPressButton}
            title="discard"
            color="#841584"
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
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    
    
  }
});




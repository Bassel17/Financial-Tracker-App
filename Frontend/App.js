import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginPage from './src/pages/LoginPage';
import Empty from './src/pages/emptyImage';
import SignupPage from './src/pages/SignupPage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import Empty from './src/pages/emptyImage';
//import Groceries from './src/pages/Groceries';
//import CurrencyPage from './src/pages/CurrencyPage';
//import SwitchPage from './src/pages/SwitchPage';
//import SettingPage from './src/pages/SettingPage';
//import BurgerPage from './src/pages/BurgerPage';
//import OverviewPage from './src/pages/OverviewPage';
//import BarChart from './src/pages/BarChart';
//import ReportPage from './src/pages/ReportPage';
import * as SecureStore from 'expo-secure-store';
const Stack = createStackNavigator();

export default class App extends React.Component {

  componentDidMount(){
    this.getToken();
  }

  getToken = async () => {
    try{
      const response = await SecureStore.getItemAsync("token", token);
      console.log(response);
    }catch(error){
      console.log(error);
    }
  }

  render(){
    return (
      //  < BarChart/>
        <ReportPage/>
          //<SignupPage/>
          //<BurgerPage/>
          //<SettingPage/>
         // <Groceries/>
        //     <NavigationContainer>
        //     <Stack.Navigator>
        //      <Stack.Screen name="Login" component={LoginPage} />
        //       <Stack.Screen name="Empty" component={Empty} />
        //       <Stack.Screen name="SignupPage" component={SignupPage} />
        //    </Stack.Navigator>
        //  </NavigationContainer> 
    );
  }
}
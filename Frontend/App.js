import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginPage from './src/pages/LoginPage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import Empty from './src/pages/emptyImage';
//import SignupPage from './src/pages/SignupPage';
import Groceries from './src/pages/Groceries';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Groceries/>
      // <NavigationContainer>
      //<Stack.Navigator>
       // <Stack.Screen name="Login" component={LoginPage} />
        //<Stack.Screen name="Empty" component={Empty} />
        //<Stack.Screen name="SignupPage" component={SignupPage} />
      //</Stack.Navigator>
  //  </NavigationContainer> 
  );
}
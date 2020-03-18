import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginPage from './src/pages/LoginPage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
<<<<<<< HEAD
//import Empty from './src/pages/emptyImage';
//import SignupPage from './src/pages/SignupPage';
import BurgerPage from './src/pages/BurgerPage';
=======
import Empty from './src/pages/emptyImage';
import SignupPage from './src/pages/SignupPage';
import Groceries from './src/pages/Groceries';
import OverviewPage from './src/pages/OverviewPage';
>>>>>>> overviewPage

const Stack = createStackNavigator();

export default function App() {
  return (
<<<<<<< HEAD
    <BurgerPage/>
    //<Groceries/>
      // <NavigationContainer>
      //<Stack.Navigator>
       // <Stack.Screen name="Login" component={LoginPage} />
        //<Stack.Screen name="Empty" component={Empty} />
        //<Stack.Screen name="SignupPage" component={SignupPage} />
      //</Stack.Navigator>
  //  </NavigationContainer> 
=======
      <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="OverviewPage" component={OverviewPage} />
       <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Empty" component={Empty} />
        <Stack.Screen name="SignupPage" component={SignupPage} />
      </Stack.Navigator>
   </NavigationContainer> 
>>>>>>> overviewPage
  );
}
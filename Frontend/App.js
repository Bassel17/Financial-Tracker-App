import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginPage from './src/pages/LoginPage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import Empty from './src/pages/emptyImage';
//import SignupPage from './src/pages/SignupPage';
//import Groceries from './src/pages/Groceries';
//import CurrencyPage from './src/pages/CurrencyPage';
//import SwitchPage from './src/pages/SwitchPage';
//import SettingPage from './src/pages/SettingPage';
//import BurgerPage from './src/pages/BurgerPage';
import SwitchPage from './src/pages/SwitchPage';

//import Empty from './src/pages/emptyImage';
//import SignupPage from './src/pages/SignupPage';
//import OverviewPage from './src/pages/OverviewPage';

const Stack = createStackNavigator();

export default function App() {
  return (
   <SwitchPage/>
    //<SignupPage/>
    //<BurgerPage/>
    //<SettingPage/>
   // <Groceries/>
      // <NavigationContainer>
      //<Stack.Navigator>
       // <Stack.Screen name="Login" component={LoginPage} />
        //<Stack.Screen name="Empty" component={Empty} />
        //<Stack.Screen name="SignupPage" component={SignupPage} />
    //  </Stack.Navigator>
  //  </NavigationContainer> 
      //<NavigationContainer>
      //<Stack.Navigator>
      //<Stack.Screen name="OverviewPage" component={OverviewPage} />
      // <Stack.Screen name="Login" component={LoginPage} />
       // <Stack.Screen name="Empty" component={Empty} />
        //<Stack.Screen name="SignupPage" component={SignupPage} />
      //</Stack.Navigator>
  // </NavigationContainer> 
  );
}
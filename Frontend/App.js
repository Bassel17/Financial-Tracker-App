import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginPage from './src/pages/LoginPage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Empty from './src/pages/emptyImage';

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Empty" component={Empty} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
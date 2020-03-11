import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignupPage from './src/pages/SignupPage';

export default function App() {
  return (
    <View style={styles.container}>
      <SignupPage/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});

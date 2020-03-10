import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Inputbox from '../components/Inputbox';

export default function LoginPage() {
  return (
    <View style={styles.container}>
     <Inputbox/>
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
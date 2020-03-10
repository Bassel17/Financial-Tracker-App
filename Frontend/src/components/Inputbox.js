import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  return (
    <View >
      <TextInput style={styles.border}></TextInput>
      
    </View>
  );
}

const styles = StyleSheet.create({
    border: {
        borderRadius:4,
        borderWidth: "10px",
    }

  });
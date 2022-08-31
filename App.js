/**
 * @author Mark Emmanuel
 * @author Dahn Balan
 */
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Our To-do list app</Text>
      <StatusBar style="auto" />
    </View>
  );
}

/* 
------------------------------------------------------------------------------------------------------------------------------ A long line of dashes heh.
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

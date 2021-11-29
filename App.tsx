import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Colors from './app/components/Color';
import LevelWidget from './app/components/habitWidget/HabitWidget';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.mainBg,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <LevelWidget habitname="Habitname" level="22" progress={60} />
      </View>
      <StatusBar />
    </>
  );
}

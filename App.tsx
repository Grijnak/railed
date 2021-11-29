import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Colors from './app/components/Color';
import HabitWidget from './app/components/habitWidget/HabitWidget';
import { listHabits } from './app/data/habit';

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
        {listHabits().map(habit => (
          // <Text key={habit.id}>{habit.name}</Text>
          <HabitWidget key={habit.id} habit={habit} />
        ))}
      </View>
      <StatusBar />
    </>
  );
}

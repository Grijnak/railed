import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { HabitState } from '../HabitSlice';
import Colors from '../../Color';
import Widget from '../components/Widget';
import { Styles } from '../Styles';

export default function List() {
  const habits = useSelector((state: HabitState) => state.habits);

  return (
    <View style={Styles.screen}>
      {habits.map(habit => (
        <Widget style={Styles.listElement} key={habit.id} habitId={habit.id} />
      ))}
      <View style={[Styles.listElement, { justifyContent: 'center' }]}>
        <Text style={{ color: Colors.text }}>+</Text>
      </View>
    </View>
  );
}

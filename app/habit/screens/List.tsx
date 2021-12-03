import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { selectHabits } from '../HabitSlice';
import Colors from '../../Color';
import Widget from '../components/Widget';
import { styles } from '../Styles';

export default function List() {
  const habits = useSelector(selectHabits);

  return (
    <View style={styles.screen}>
      {habits.map(habit => (
        <Widget style={styles.listElement} key={habit.id} habit={habit} />
      ))}
      <View style={[styles.listElement, { justifyContent: 'center' }]}>
        <Text style={{ color: Colors.text }}>+</Text>
      </View>
    </View>
  );
}

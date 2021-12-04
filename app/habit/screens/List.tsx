import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { selectHabitIds } from '../HabitSlice';
import Colors from '../../Color';
import Widget from '../components/Widget';
import { Styles } from '../Styles';

export default function List() {
  const habitIds = useSelector(selectHabitIds);

  return (
    <View style={Styles.screen}>
      {habitIds.map(id => (
        <Widget style={Styles.listElement} key={id} habitId={id} />
      ))}
      <View style={[Styles.listElement, { justifyContent: 'center' }]}>
        <Text style={{ color: Colors.text }}>+</Text>
      </View>
    </View>
  );
}

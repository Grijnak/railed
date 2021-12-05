import React from 'react';
import { View, Pressable, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/core';
import { selectHabitIds } from '../HabitSlice';
import Colors from '../../Color';
import Widget from '../components/Widget';
import { Styles } from '../Styles';

export default function List() {
  const navigation = useNavigation();

  const habitIds = useSelector(selectHabitIds);

  return (
    <View style={Styles.screen}>
      {habitIds.map(id => (
        <Widget style={Styles.listElement} key={id} habitId={id} />
      ))}
      <Pressable
        onPress={() => navigation.navigate('HabitNew' as never)}
        style={[Styles.listElement, { justifyContent: 'center' }]}
      >
        <Text style={{ color: Colors.text }}>+</Text>
      </Pressable>
    </View>
  );
}

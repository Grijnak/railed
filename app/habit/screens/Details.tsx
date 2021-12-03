import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text } from 'react-native';
import Color from '../../Color';
import { HabitStackParamList } from '../HabitStack';

type Props = NativeStackScreenProps<HabitStackParamList, 'HabitDetails'>;

export default function Details({ route, navigation }: Props) {
  const { habit } = route.params;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: habit.name,
    });
  });

  return (
    <View style={{ backgroundColor: Color.mainBg, flex: 1 }}>
      <Text style={{ backgroundColor: Color.lightBg, color: Color.text }}>
        Name: {habit.name}
      </Text>
    </View>
  );
}

import React from 'react';
import { View, Text, StyleProp, ViewStyle, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { getMinXp, getLevel } from '../util/habit';
import { Habit } from '../HabitSlice';
import Colors from '../../Color';
import LevelNumber from './LevelNumber';

interface Props {
  habit: Habit;
  style: StyleProp<ViewStyle>;
}

export default function Widget({ habit, style }: Props) {
  const navigation = useNavigation();

  const level = getLevel(habit.xp);
  const minXp = getMinXp(level);
  const progress = ((habit.xp - minXp) * 100) / (minXp + getMinXp(level + 1));

  return (
    <Pressable
      style={[style, { flexDirection: 'row' }]}
      onPress={() =>
        navigation.navigate('HabitDetails' as never, { habit } as never)
      }
    >
      <LevelNumber level={String(level)} progress={progress} />
      <Text
        style={{
          marginStart: 5,
          color: Colors.text,
        }}
      >
        {habit.name}
      </Text>
    </Pressable>
  );
}

// checkmark {'\u2713'} cross {'\u2715'}

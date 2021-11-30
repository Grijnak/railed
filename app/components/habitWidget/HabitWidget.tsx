import React from 'react';
import { View, Text } from 'react-native';
import { Habit, getMinXp, getLevel } from '../../logic/habit';
import Colors from '../Color';
import LevelNumber from './LevelNumber';

interface Props {
  habit: Habit;
}

export default function HabitWidget({ habit }: Props) {
  const level = getLevel(habit.xp);
  const minXp = getMinXp(level);
  const progress = ((habit.xp - minXp) * 100) / (minXp + getMinXp(level + 1));
  return (
    <View
      style={{
        backgroundColor: Colors.lightBg,
        width: '100%',
        padding: 3,
        flexDirection: 'row',
        alignItems: 'center',
      }}
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
    </View>
  );
}

// checkmark {'\u2713'} cross {'\u2715'}

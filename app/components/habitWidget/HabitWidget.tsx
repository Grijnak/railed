import React from 'react';
import { View, Text } from 'react-native';
import Colors from '../Color';
import LevelNumber from './LevelNumber';

interface Props {
  habitname: string;
  level: string;
  progress: number;
}

export default function LevelWidget({ habitname, level, progress }: Props) {
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
      <LevelNumber level={level} progress={progress} />
      <Text
        style={{
          marginStart: 5,
          color: Colors.text,
        }}
      >
        {habitname}
      </Text>
    </View>
  );
}

// checkmark {'\u2713'} cross {'\u2715'}

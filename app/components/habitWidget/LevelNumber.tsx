import React from 'react';
import { Text } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import Colors from '../Color';

interface Props {
  level: string;
  progress: number;
}

export default function LevelNumber({ level, progress }: Props) {
  return (
    <AnimatedCircularProgress
      size={25}
      width={1}
      fill={progress}
      tintColor={Colors.levelnumber}
      backgroundColor={Colors.levelnumberBg}
      rotation={0}
    >
      {() => <Text style={{ color: Colors.levelnumber }}>{level}</Text>}
    </AnimatedCircularProgress>
  );
}

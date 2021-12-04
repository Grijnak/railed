import React from 'react';
import { Text } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import useMemoizedSelector from '../../Utils';
import Color from '../../Color';
import { makeSelectHabitLevelProgressById } from '../HabitSlice';

type Props = {
  habitId: string;
  size: number;
  border: number;
  fontSize: number;
};

export default function LevelProgress({
  habitId,
  size,
  border,
  fontSize,
}: Props) {
  const { level, progress } = useMemoizedSelector(
    makeSelectHabitLevelProgressById(habitId),
  );

  return (
    <AnimatedCircularProgress
      size={size}
      width={border}
      fill={progress}
      prefill={progress}
      tintColor={Color.levelnumber}
      backgroundColor={Color.levelnumberBg}
      rotation={0}
    >
      {() => (
        <Text style={{ color: Color.levelnumber, fontSize }}>{level}</Text>
      )}
    </AnimatedCircularProgress>
  );
}

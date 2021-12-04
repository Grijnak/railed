import React from 'react';
import { Text } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { useSelector } from 'react-redux';
import Color from '../../Color';
import { makeSelectHabitXpById } from '../HabitSlice';
import { getLevel, getMinXp } from '../util/HabitUtils';

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
  const xp = useSelector(makeSelectHabitXpById(habitId));

  const level = getLevel(xp);
  const nextLevelXp = getMinXp(level + 1);
  const thisLevelXp = getMinXp(level);
  const progress = ((xp - thisLevelXp) * 100) / (nextLevelXp - thisLevelXp);

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

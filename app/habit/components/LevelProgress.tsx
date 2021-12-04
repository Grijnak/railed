import React from 'react';
import { Text } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { useSelector } from 'react-redux';
import Color from '../../Color';
import { selectHabitById } from '../HabitSlice';
import { getLevel, getMinXp } from '../util/HabitUtils';

interface Props {
  habitId: number;
  size: number;
  border: number;
  fontSize: number;
}

export default function LevelProgress({
  habitId,
  size,
  border,
  fontSize,
}: Props) {
  const habit = useSelector(selectHabitById(habitId));

  if (!habit) {
    return null;
  }

  const level = getLevel(habit.xp);
  const nextLevelXp = getMinXp(level + 1);
  const minXp = getMinXp(level);
  const progress = ((habit.xp - minXp) * 100) / (nextLevelXp - minXp);

  return (
    <AnimatedCircularProgress
      size={size}
      width={border}
      fill={progress}
      prefill={progress === 0 ? 100 : progress}
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

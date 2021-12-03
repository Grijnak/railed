import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import Color from '../../Color';
import LevelNumber from '../components/LevelNumber';
import { selectHabitById } from '../HabitSlice';
import { HabitStackParamList } from '../HabitStack';

type Props = NativeStackScreenProps<HabitStackParamList, 'HabitDetails'>;

export default function Details({ route, navigation }: Props) {
  const { habitId } = route.params;

  const habit = useSelector(selectHabitById(habitId));

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: habit ? habit.name : `No habit with id ${habitId} found`,
    });
  });

  if (!habit) {
    return null;
  }

  return (
    <View
      style={{
        backgroundColor: Color.mainBg,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <LevelNumber habitId={habitId} size={200} border={10} fontSize={50} />
    </View>
  );
}

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';
import Color from '../../Color';
import useMemoizedSelector from '../../Utils';
import LevelProgress from '../components/LevelProgress';
import { makeSelectHabitNameById } from '../HabitSlice';
import { HabitStackParamList } from '../HabitStack';

type Props = NativeStackScreenProps<HabitStackParamList, 'HabitDetails'>;

export default function Details({ route, navigation }: Props) {
  const { habitId } = route.params;

  const name = useMemoizedSelector(makeSelectHabitNameById(habitId));

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: name,
    });
  });

  return (
    <View
      style={{
        backgroundColor: Color.mainBg,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <LevelProgress habitId={habitId} size={200} border={10} fontSize={50} />
    </View>
  );
}

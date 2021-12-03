import React, { ReactNode } from 'react';
import { Text, StyleProp, ViewStyle, Pressable, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { useDispatch, useSelector } from 'react-redux';
import Svg, { Circle, G, Polyline } from 'react-native-svg';
import { addXp, selectHabitById } from '../HabitSlice';
import LevelNumber from './LevelNumber';
import Color from '../../Color';

interface Props {
  habitId: number;
  style: StyleProp<ViewStyle>;
}

function DrawCircle({
  children,
  color,
}: {
  children: ReactNode;
  color: string;
}) {
  return (
    <View style={{ aspectRatio: 1 }}>
      <Svg height="90%" width="90%" viewBox="0 0 100 100">
        <G>
          <Circle r="50" cx="50" cy="50" fill={color} />
          {children}
        </G>
      </Svg>
    </View>
  );
}

export default function Widget({ habitId, style }: Props) {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const habit = useSelector(selectHabitById(habitId));

  if (!habit) {
    return null;
  }

  return (
    <Pressable
      style={[style, { flexDirection: 'row' }]}
      onPress={() =>
        navigation.navigate('HabitDetails' as never, { habitId } as never)
      }
    >
      <LevelNumber habitId={habitId} size={30} border={5} fontSize={-1} />
      <Text
        style={{
          marginStart: 5,
          color: Color.text,
        }}
      >
        {habit.name}
      </Text>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}
      >
        <Pressable
          style={{ marginRight: 5 }}
          onPress={() => dispatch(addXp({ habitId: habit.id, amount: 1 }))}
        >
          <DrawCircle color="green">
            <Polyline
              points="20,50 40,70 75,30"
              stroke={Color.textLight}
              strokeWidth="10"
            />
          </DrawCircle>
        </Pressable>
      </View>
    </Pressable>
  );
}
/*
<Pressable>
  <View style={{ aspectRatio: 1 }}>
    <DrawCircle color="red">
      <Polyline
        points="25,25 75,75"
        stroke={Color.textLight}
        strokeWidth="10"
      />
      <Polyline
        points="25,75 75,25"
        stroke={Color.textLight}
        strokeWidth="10"
      />
    </DrawCircle>
  </View>
</Pressable>;
*/

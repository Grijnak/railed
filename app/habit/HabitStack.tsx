import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import List from './screens/List';
import Details from './screens/Details';
import { StackStyle } from './Styles';

type HabitStackParamList = {
  HabitList: undefined;
  HabitDetails: { habitId: string };
};

const Stack = createNativeStackNavigator<HabitStackParamList>();

export default function HabitStack() {
  return (
    <Stack.Navigator initialRouteName="HabitList" screenOptions={StackStyle}>
      <Stack.Screen
        name="HabitList"
        component={List}
        options={{ title: 'Habit List' }}
      />
      <Stack.Screen name="HabitDetails" component={Details} />
    </Stack.Navigator>
  );
}

export { HabitStackParamList };

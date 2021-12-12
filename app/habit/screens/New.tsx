import { useNavigation } from '@react-navigation/core';
import { set } from 'date-fns';
import { DateTime } from 'luxon';
import React from 'react';
import HabitEditingForm from '../components/HabitEditingForm/HabitEditingForm';

export default function New() {
  const navigation = useNavigation();

  const onSubmit = (data: any) => console.log(data);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'New Habit',
    });
  });

  return (
    <HabitEditingForm
      defaultValues={{
        name: '',
        description: '',
        dayamount: 1,
        startdate: DateTime.now().set({
          hour: 0,
          minute: 0,
          second: 0,
          millisecond: 0,
        }),
      }}
      onSubmit={onSubmit}
    />
  );
}

import { useNavigation } from '@react-navigation/core';
import React from 'react';
import HabitEditingForm from '../components/HabitEditingForm';

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
        dayamount: '1',
        startdate: new Date(),
      }}
      onSubmit={onSubmit}
    />
  );
}

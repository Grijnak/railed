import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import DatePicker, { Event } from '@react-native-community/datetimepicker';
import Color from '../../../Color';

export default function StartDatePicker({
  date,
  startDateComponentName,
  dateProcessor,
}: {
  date: Date;
  startDateComponentName: string;
  dateProcessor: (d: Date | undefined) => void;
}) {
  const { control } = useFormContext();
  return (
    <Controller
      name={startDateComponentName}
      control={control}
      render={() => (
        <DatePicker
          style={{ backgroundColor: Color.lightBg }}
          value={date}
          display="default"
          onChange={(_e: Event, d: Date | undefined) => dateProcessor(d)}
        />
      )}
    />
  );
}

import React, { useEffect, useState } from 'react';
import { Controller, useFormContext, useWatch } from 'react-hook-form';
import DatePicker, { Event } from '@react-native-community/datetimepicker';
import { Platform, Pressable, Text, View, ViewStyle } from 'react-native';
import { DateTime } from 'luxon';
import Color from '../../../Color';
import { Styles } from '../../Styles';

export default function StartDatePicker({
  date,
  style,
  startDateComponentName,
  onBlur,
}: {
  date: DateTime;
  style: ViewStyle;
  startDateComponentName: string;
  onBlur: () => void;
}) {
  const { control, register, setValue, getValues } = useFormContext();

  const startDateInputComponentName = `${startDateComponentName}input`;
  const [startDate, setStartDate] = useState(date);

  useEffect(
    function setUpStartDateComponent() {
      register(startDateComponentName);
      const defaultDate: DateTime = getValues(startDateComponentName).set({
        hour: 0,
        minute: 0,
        second: 0,
        millisecond: 0,
      });
      setStartDate(defaultDate);
      setValue(startDateInputComponentName, defaultDate.toJSDate());
    },
    [
      startDateComponentName,
      startDateInputComponentName,
      getValues,
      register,
      setValue,
    ],
  );

  if (Platform.OS === 'ios') {
    return (
      <View style={style}>
        <Controller
          name={startDateInputComponentName}
          control={control}
          render={() => (
            <DatePicker
              style={{ backgroundColor: Color.lightBg }}
              value={startDate.toJSDate()}
              display="default"
              onChange={(_e: Event, d: Date | undefined) => {
                if (d) setStartDate(DateTime.fromJSDate(d));
              }}
            />
          )}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
          <Pressable
            onPress={onBlur}
            style={[Styles.button, { backgroundColor: Color.veryLightBg }]}
          >
            <Text style={Styles.text}> Cancel </Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setValue(
                startDateComponentName,
                getValues(startDateInputComponentName),
              );
              onBlur();
            }}
            style={[Styles.button, { backgroundColor: Color.veryLightBg }]}
          >
            <Text style={Styles.text}> Done </Text>
          </Pressable>
        </View>
      </View>
    );
  }

  return (
    <Controller
      name={startDateInputComponentName}
      control={control}
      render={() => (
        <DatePicker
          style={{ backgroundColor: Color.lightBg }}
          value={startDate.toJSDate()}
          display="default"
          onChange={(_e: Event, d: Date | undefined) => {
            if (d) {
              d.setHours(0, 0, 0, 0);
              setValue(startDateComponentName, DateTime.fromJSDate(d));
            }
            onBlur();
          }}
        />
      )}
    />
  );
}

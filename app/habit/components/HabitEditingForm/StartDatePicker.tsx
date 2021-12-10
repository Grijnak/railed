import React, { useEffect, useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import DatePicker, { Event } from '@react-native-community/datetimepicker';
import { Platform, Pressable, Text, View, ViewStyle } from 'react-native';
import Color from '../../../Color';
import { Styles } from '../../Styles';

export default function StartDatePicker({
  date,
  style,
  startDateComponentName,
  dateProcessor,
}: {
  date: Date;
  style: ViewStyle;
  startDateComponentName: string;
  dateProcessor: (d: Date | undefined) => void;
}) {
  const { control } = useFormContext();

  const [startDate, setStartDate] = useState<Date>(date);

  if (Platform.OS === 'ios') {
    return (
      <View style={style}>
        <Controller
          name={startDateComponentName}
          control={control}
          render={() => (
            <DatePicker
              style={{ backgroundColor: Color.lightBg }}
              value={startDate}
              display="default"
              onChange={(_e: Event, d: Date | undefined) => {
                if (d) setStartDate(d);
              }}
            />
          )}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
          <Pressable
            onPress={() => dateProcessor(undefined)}
            style={[Styles.button, { backgroundColor: Color.veryLightBg }]}
          >
            <Text style={Styles.text}> Cancel </Text>
          </Pressable>
          <Pressable
            onPress={() => dateProcessor(startDate)}
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

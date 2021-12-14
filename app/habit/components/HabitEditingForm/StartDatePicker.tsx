import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import DatePicker, { Event } from '@react-native-community/datetimepicker';
import { Platform, Pressable, Text, View, ViewStyle } from 'react-native';
import { DateTime } from 'luxon';
import Color from '../../../Color';
import { Styles } from '../../Styles';

export default function StartDatePicker({
  date,
  style,
  startDateComponentName,
  closingFunction,
}: {
  date: DateTime;
  style: ViewStyle;
  startDateComponentName: string;
  closingFunction: () => void;
}) {
  const { setValue } = useFormContext();

  const [startDate, setStartDate] = useState(date.toJSDate());

  if (Platform.OS === 'ios') {
    return (
      <View style={style}>
        <DatePicker
          style={{ backgroundColor: Color.lightBg }}
          value={startDate}
          display="default"
          onChange={(_e: Event, d: Date | undefined) => {
            if (d) setStartDate(d);
          }}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
          <Pressable
            onPress={closingFunction}
            style={[Styles.button, { backgroundColor: Color.veryLightBg }]}
          >
            <Text style={Styles.text}> Cancel </Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setValue(startDateComponentName, DateTime.fromJSDate(startDate));
              closingFunction();
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
    <DatePicker
      style={{ backgroundColor: Color.lightBg }}
      value={startDate}
      display="default"
      onChange={(_e: Event, d: Date | undefined) => {
        closingFunction();
        if (d) setValue(startDateComponentName, DateTime.fromJSDate(d));
      }}
    />
  );
}

import React, { useState, useEffect } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import { Pressable, View, Text } from 'react-native';
import { DateTime } from 'luxon';
import Color from '../../../Color';
import { Styles } from '../../Styles';
import DayAmountInput from './DayAmountInput';
import StartDatePicker from './StartDatePicker';

export default function TimePatternSelectionMenu({
  dayAmountComponentName,
  startDateComponentName,
}: {
  dayAmountComponentName: string;
  startDateComponentName: string;
}) {
  const { register, setFocus, setValue, getValues } = useFormContext();

  const dayAmountInputComponentName = `${dayAmountComponentName}input`;
  const dayAmountInput = useWatch({ name: dayAmountInputComponentName });
  const [dayAmount, setDayAmount] = useState(
    Number(getValues([dayAmountComponentName])),
  );
  const [drawDayAmountInput, setDrawDayAmountInput] = useState(true);

  const startDate = useWatch({ name: startDateComponentName });
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);

  useEffect(
    function setUpDayAmountComponent() {
      register(dayAmountComponentName);
      setDayAmount(getValues(dayAmountComponentName));
    },
    [dayAmountComponentName, getValues, register],
  );

  useEffect(
    function cleanDayAmountInput() {
      if (dayAmountInput === undefined) {
        setValue(dayAmountInputComponentName, String(dayAmount));
      } else {
        const cleanedInput = dayAmountInput
          ? dayAmountInput.replace(/\D/g, '')
          : '';
        setValue(dayAmountInputComponentName, cleanedInput);
        setDayAmount(cleanedInput ? Number(cleanedInput) : 1);
      }
    },
    [dayAmount, dayAmountInput, dayAmountInputComponentName, setValue],
  );

  register(dayAmountInputComponentName, {
    onBlur: function dayAmountInputBlur() {
      setValue(dayAmountComponentName, dayAmount);
      setDrawDayAmountInput(dayAmount !== 1);
    },
  });

  return (
    <>
      <View style={[Styles.maxRow, { justifyContent: 'flex-start' }]}>
        <Pressable
          style={{ flexDirection: 'row' }}
          onPress={() => {
            setDrawDayAmountInput(true);
            if (drawDayAmountInput) setFocus(dayAmountInputComponentName);
          }}
        >
          <Text style={Styles.text}>
            Repeat{' '}
            <Text style={{ textDecorationLine: 'underline' }}>every</Text>{' '}
          </Text>
          {drawDayAmountInput && (
            <DayAmountInput
              dayAmountComponentName={dayAmountInputComponentName}
            />
          )}
          <Text style={Styles.text}>
            {drawDayAmountInput && ' '}
            <Text style={{ textDecorationLine: 'underline' }}>
              day{dayAmount !== 1 && 's'}
            </Text>
          </Text>
        </Pressable>
        {dayAmount > 0 && (
          <Pressable
            style={{ flexDirection: 'row' }}
            onPress={() => setShowStartDatePicker(true)}
          >
            <Text style={Styles.text}>
              , starting from{' '}
              <Text style={{ textDecorationLine: 'underline' }}>
                {startDate.toLocaleString()}
              </Text>
            </Text>
          </Pressable>
        )}
        <Text style={Styles.text}>.</Text>
      </View>
      {showStartDatePicker && (
        <StartDatePicker
          date={startDate}
          style={{
            backgroundColor: Color.lightBg,
            width: '100%',
            padding: 5,
            margin: 2,
            borderRadius: 20,
          }}
          startDateComponentName={startDateComponentName}
          onBlur={() => setShowStartDatePicker(false)}
        />
      )}
    </>
  );
}

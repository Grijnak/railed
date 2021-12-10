import React, { useState, useEffect } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import { Pressable, View, Text } from 'react-native';
import Color from '../../../Color';
import { Styles } from '../../Styles';
import DayAmountInput from './DayAmountInput';
import StartDatePicker from './StartDatePicker';

function parseDayAmount(numberInput: string) {
  if (numberInput) return Number(numberInput);
  return 1;
}

export default function TimePatternSelectionMenu({
  dayAmountComponentName,
  startDateComponentName,
}: {
  dayAmountComponentName: string;
  startDateComponentName: string;
}) {
  const { register, setValue, getValues } = useFormContext();

  const dayAmountInput = useWatch({ name: 'dayamountinput' });
  const [dayAmount, setDayAmount] = useState(parseDayAmount(dayAmountInput));
  const [drawDayAmountInput, setDrawDayAmountInput] = useState(
    Number(dayAmountInput) !== 1 && dayAmountInput !== '',
  );

  const [startDate, setStartDate] = useState(new Date());
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);

  register('dayamountinput', {
    onBlur: () => {
      setValue(dayAmountComponentName, dayAmount);
      setDrawDayAmountInput(
        Number(dayAmountInput) !== 1 && dayAmountInput !== '',
      );
    },
  });

  useEffect(() => {
    register(dayAmountComponentName);
    setDayAmount(getValues(dayAmountComponentName));
  }, [dayAmountComponentName, getValues, register]);

  useEffect(() => {
    const cleanedInput = dayAmountInput
      ? dayAmountInput.replace(/\D/g, '')
      : '';
    setValue('dayamountinput', cleanedInput);
  }, [dayAmountInput, setValue]);

  useEffect(() => {
    setDayAmount(parseDayAmount(dayAmountInput));
  }, [dayAmountComponentName, dayAmountInput, setValue]);

  return (
    <>
      <View style={[Styles.maxRow, { justifyContent: 'flex-start' }]}>
        <Pressable
          style={{ flexDirection: 'row' }}
          onPress={() => setDrawDayAmountInput(true)}
        >
          <Text style={Styles.text}>
            Repeat{' '}
            <Text style={{ textDecorationLine: 'underline' }}>every</Text>{' '}
          </Text>
          {drawDayAmountInput && (
            <DayAmountInput dayAmountComponentName="dayamountinput" />
          )}
          <Text style={Styles.text}>
            {' '}
            <Text style={{ textDecorationLine: 'underline' }}>
              {drawDayAmountInput && ' '}
              day{Number(dayAmountInput) !== 1 && dayAmountInput !== '' && 's'}
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
                {startDate.toISOString().split('T')[0]}
              </Text>
            </Text>
          </Pressable>
        )}
        <Text style={Styles.text}>.</Text>
      </View>
      {showStartDatePicker && (
        <View
          style={{
            backgroundColor: Color.lightBg,
            width: '100%',
            padding: 5,
            margin: 2,
            borderRadius: 20,
          }}
        >
          <StartDatePicker
            date={startDate}
            startDateComponentName={startDateComponentName}
            dateProcessor={(d: Date | undefined) => {
              setShowStartDatePicker(false);
              if (d) setStartDate(d);
            }}
          />
        </View>
      )}
    </>
  );
}

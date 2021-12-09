import React, { useEffect, useState } from 'react';
import {
  Controller,
  FormProvider,
  useForm,
  useFormContext,
  useWatch,
} from 'react-hook-form';
import { Pressable, View, Text, StyleSheet } from 'react-native';
import DatePicker, { Event } from '@react-native-community/datetimepicker';
import Color from '../../Color';
import { Styles } from '../Styles';
import ControlledTextInput from './ControlledTextInput';

const styles = StyleSheet.create({
  text: {
    color: Color.text,
    marginVertical: Styles.textInput.marginVertical,
  },
});

function TimeSelection() {
  return <Text style={styles.text}>Choose a time...</Text>;
}

function StartDatePicker({
  date,
  dateProcessor,
}: {
  date: Date;
  dateProcessor: (d: Date | undefined) => void;
}) {
  const { control } = useFormContext();
  return (
    <Controller
      name="startdate"
      control={control}
      render={() => (
        <DatePicker
          value={date}
          display="default"
          onChange={(_e: Event, d: Date | undefined) => dateProcessor(d)}
        />
      )}
    />
  );
}

function DayAmountInput() {
  return (
    <ControlledTextInput
      name="dayamount"
      numeric
      autoFocus
      style={{
        padding: 0,
        marginVertical: 0,
        alignSelf: 'center',
        backgroundColor: Color.mainBg,
        textAlign: 'center',
        textDecorationLine: 'underline',
        color: Color.text,
      }}
    />
  );
}

function TimePatternSelectionMenu() {
  const { register, setValue } = useFormContext();

  const dayAmountInput = useWatch({ name: 'dayamount' });
  const [drawDayAmountInput, setDrawDayAmountInput] = useState(
    dayAmountInput !== 1,
  );
  const [dayAmount, setDayAmount] = useState(Number(dayAmountInput));

  const [startDate, setStartDate] = useState(new Date());
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);

  register('dayamount', {
    onBlur: () => {
      setDrawDayAmountInput(
        Number(dayAmountInput) !== 1 && dayAmountInput !== '',
      );
    },
  });

  useEffect(() => setValue('dayamount', dayAmountInput.replace(/\D/g, '')));

  useEffect(
    () => setDayAmount(dayAmountInput === '' ? 1 : Number(dayAmountInput)),
    [dayAmountInput],
  );

  return (
    <View style={[Styles.maxRow, { justifyContent: 'flex-start' }]}>
      <Pressable
        style={{ flexDirection: 'row' }}
        onPress={() => setDrawDayAmountInput(true)}
      >
        <Text style={styles.text}>
          Repeat <Text style={{ textDecorationLine: 'underline' }}>every</Text>{' '}
        </Text>
        {drawDayAmountInput && <DayAmountInput />}
        <Text style={styles.text}>
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
          <Text style={styles.text}>
            , starting from{' '}
            <Text style={{ textDecorationLine: 'underline' }}>
              {startDate.toISOString().split('T')[0]}
            </Text>
          </Text>
          {showStartDatePicker && (
            <StartDatePicker
              date={startDate}
              dateProcessor={(d: Date | undefined) => {
                setShowStartDatePicker(false);
                if (d) setStartDate(d);
              }}
            />
          )}
        </Pressable>
      )}
      <Text style={styles.text}>.</Text>
    </View>
  );
}

type Props = {
  defaultValues: any;
  onSubmit: (data: any) => void;
};

export default function HabitEditingForm({ defaultValues, onSubmit }: Props) {
  const methods = useForm({ defaultValues });
  const { handleSubmit } = methods;

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FormProvider {...methods}>
      <View style={Styles.screen}>
        <View style={{ flex: 1, alignContent: 'center', width: '90%' }}>
          <ControlledTextInput name="name" placeholder="Name" />
          <ControlledTextInput
            name="description"
            placeholder="Description"
            multiline
          />
          <TimePatternSelectionMenu />
          <Pressable
            style={[Styles.listElement, { margin: 5 }]}
            onPress={handleSubmit(onSubmit)}
          >
            <Text style={{ color: Color.text }}>Add new habit</Text>
          </Pressable>
        </View>
      </View>
    </FormProvider>
  );
}

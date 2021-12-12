import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Pressable, View, Text } from 'react-native';
import { DateTime } from 'luxon';
import Color from '../../../Color';
import { Styles } from '../../Styles';
import ControlledTextInput from '../ControlledTextInput';
import TimePatternSelectionMenu from './TimePatternSelectionMenu';

export default function HabitEditingForm({
  defaultValues,
  onSubmit,
}: {
  defaultValues: any;
  onSubmit: (data: any) => void;
}) {
  const methods = useForm({ defaultValues });
  const { handleSubmit, watch } = methods;

  const startDate = watch('startdate');
  const dayAmount = watch('dayamount');

  const Timeslots = new Array(5).fill(null).map((_v, id) => {
    const start = startDate.plus({ hours: (dayAmount * id * 24) / 5 });
    return {
      start,
      end: startDate.plus({ hours: (dayAmount * (id + 1) * 24) / 5 }),
    };
  });

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FormProvider {...methods}>
      <View style={Styles.screen}>
        <View style={{ flex: 1, width: '90%' }}>
          <ControlledTextInput name="name" placeholder="Name" />
          <ControlledTextInput
            name="description"
            placeholder="Description"
            multiline
          />
          <View style={{ alignItems: 'center' }}>
            <TimePatternSelectionMenu
              dayAmountComponentName="dayamount"
              startDateComponentName="startdate"
            />
            {Timeslots.map(t => (
              <Text style={Styles.text} key={t.start.toMillis()}>
                {t.start.toLocaleString(DateTime.DATETIME_SHORT)} -{' '}
                {t.end.toLocaleString(DateTime.DATETIME_SHORT)}
              </Text>
            ))}
            <Text style={Styles.text}>{startDate.toLocaleString()}</Text>
            <Pressable
              style={[Styles.button, { width: '90%', margin: 5 }]}
              onPress={handleSubmit(onSubmit)}
            >
              <Text style={{ color: Color.text }}>Add new habit</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </FormProvider>
  );
}

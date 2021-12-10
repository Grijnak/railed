import React from 'react';
import { FormProvider, useForm, useWatch } from 'react-hook-form';
import { Pressable, View, Text } from 'react-native';
import Color from '../../../Color';
import { Styles } from '../../Styles';
import ControlledTextInput from '../ControlledTextInput';
import TimePatternSelectionMenu from './TimePatternSelectionMenu';

function TimeSelection() {
  return <Text style={Styles.text}>Choose a time...</Text>;
}

type Props = {
  defaultValues: any;
  onSubmit: (data: any) => void;
};

export default function HabitEditingForm({ defaultValues, onSubmit }: Props) {
  const methods = useForm({ defaultValues });
  const { handleSubmit, watch } = methods;

  const startDate = watch('startdate');
  const dayAmount = watch('dayamount');

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
            <Text style={Styles.text}>
              {dayAmount} {startDate.toISOString().split('T')[0]}
            </Text>
            <Pressable
              style={[Styles.listElement, { margin: 5 }]}
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

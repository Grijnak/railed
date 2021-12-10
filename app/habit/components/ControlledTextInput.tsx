import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import {
  KeyboardTypeOptions,
  ReturnKeyTypeOptions,
  TextInput,
  TextStyle,
} from 'react-native';
import Color from '../../Color';
import { Styles } from '../Styles';

export default function ControlledTextInput({
  name,
  placeholder,
  style,
  multiline,
  autoFocus,
  keyboardType,
  returnKeyType,
}: {
  name: string;
  placeholder?: string;
  style?: TextStyle[] | TextStyle;
  multiline?: boolean;
  autoFocus?: boolean;
  keyboardType?: KeyboardTypeOptions;
  returnKeyType?: ReturnKeyTypeOptions;
}) {
  const { control, register } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <TextInput
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register(name)}
          style={[Styles.textInput, style]}
          keyboardType={keyboardType}
          returnKeyType={returnKeyType}
          underlineColorAndroid="transparent"
          autoFocus={autoFocus}
          multiline={multiline}
          placeholder={placeholder}
          placeholderTextColor={Color.text}
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
        />
      )}
    />
  );
}

ControlledTextInput.defaultProps = {
  placeholder: '',
  style: undefined,
  multiline: false,
  autoFocus: false,
  keyboardType: undefined,
  returnKeyType: undefined,
};

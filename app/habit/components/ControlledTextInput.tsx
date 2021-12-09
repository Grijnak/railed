import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { TextInput, TextStyle } from 'react-native';
import Color from '../../Color';
import { Styles } from '../Styles';

export default function ControlledTextInput({
  name,
  placeholder,
  style,
  multiline,
  autoFocus,
  numeric,
}: {
  name: string;
  placeholder?: string;
  style?: TextStyle[] | TextStyle;
  multiline?: boolean;
  autoFocus?: boolean;
  numeric?: boolean;
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
          keyboardType={numeric ? 'numeric' : undefined}
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
  numeric: false,
};

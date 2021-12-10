import React from 'react';
import Color from '../../../Color';
import ControlledTextInput from '../ControlledTextInput';

export default function DayAmountInput({
  dayAmountComponentName,
}: {
  dayAmountComponentName: string;
}) {
  return (
    <ControlledTextInput
      name={dayAmountComponentName}
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

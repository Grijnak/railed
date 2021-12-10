import React from 'react';
import Color from '../../../Color';
import ControlledTextInput from '../ControlledTextInput';

export default function DayAmountInput({
  dayAmountComponentName,
  autoFocus,
}: {
  dayAmountComponentName: string;
  autoFocus: boolean;
}) {
  return (
    <ControlledTextInput
      name={dayAmountComponentName}
      keyboardType="number-pad"
      autoFocus={autoFocus}
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

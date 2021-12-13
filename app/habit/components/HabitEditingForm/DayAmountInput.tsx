import React from 'react';
import Color from '../../../Color';
import ControlledTextInput from '../ControlledTextInput';

export default function DayAmountInput({
  dayAmountComponentName,
  focus,
}: {
  dayAmountComponentName: string;
  focus: boolean;
}) {
  return (
    <ControlledTextInput
      name={dayAmountComponentName}
      autoFocus={focus}
      keyboardType="number-pad"
      returnKeyType="done"
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

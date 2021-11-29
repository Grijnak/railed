import React from 'react';
import { Text } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

interface Props {
  text: string;
  fill: number;
  tint: string;
  tintBg: string;
}

export default function CircledText({ text, fill, tint, tintBg }: Props) {
  return (
    <AnimatedCircularProgress
      size={25}
      width={1}
      fill={fill}
      tintColor={tint}
      backgroundColor={tintBg}
      rotation={0}
    >
      {() => <Text style={{ color: tint }}>{text}</Text>}
    </AnimatedCircularProgress>
  );
}

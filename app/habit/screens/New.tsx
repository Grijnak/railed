import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { Pressable, TextInput, View, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import Color from '../../Color';
import { addHabit } from '../HabitSlice';
import { Styles } from '../Styles';

export default function New() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [name, setName] = useState('');

  return (
    <View style={Styles.screen}>
      <TextInput
        style={{
          width: '90%',
          backgroundColor: Color.lightBg,
          color: Color.textLight,
          borderRadius: 5,
        }}
        underlineColorAndroid="transparent"
        placeholder="Name"
        placeholderTextColor={Color.text}
        onChange={e => setName(e.nativeEvent.text)}
      />
      <Pressable
        style={Styles.listElement}
        onPress={() => {
          dispatch(addHabit({ name }));
          navigation.goBack();
        }}
      >
        <Text style={{ color: Color.text }}> Add new habit </Text>
      </Pressable>
    </View>
  );
}

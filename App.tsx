import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux';
import HabitStack from './app/habit/HabitStack';
import store from './app/Store';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <HabitStack />
        <StatusBar />
      </NavigationContainer>
    </Provider>
  );
}

import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import HabitStack from './app/habit/HabitStack';
import { persistor, store } from './app/store';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <HabitStack />
          <StatusBar />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

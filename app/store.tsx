import { configureStore } from '@reduxjs/toolkit';
import habitReducer from './habit/HabitSlice';

export const store = configureStore({
  reducer: {
    habits: habitReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

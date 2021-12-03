import { configureStore } from '@reduxjs/toolkit';
import habitReducer from './habit/HabitSlice';

export default configureStore({
  reducer: {
    habits: habitReducer,
  },
});

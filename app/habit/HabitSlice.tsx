import { createSlice } from '@reduxjs/toolkit';
import { dummyHabit1, dummyHabit2 } from './dummydata';

export interface Habit {
  id: number;
  name: string;
  xp: number;
}

export interface HabitState {
  habits: Habit[];
}

export const habitsSlice = createSlice({
  name: 'habits',
  initialState: [dummyHabit1, dummyHabit2],
  reducers: {
    addXp(state, action) {
      const { habitId, amount } = action.payload;
      const habit = state.find(h => h.id === habitId);
      if (habit) {
        habit.xp += amount;
      }
    },
  },
});

export const selectHabits = (state: HabitState) => state.habits;

export const selectHabitById = (habitId: number) => {
  return (state: HabitState) => state.habits.find(h => h.id === habitId);
};

export const { addXp } = habitsSlice.actions;

export default habitsSlice.reducer;

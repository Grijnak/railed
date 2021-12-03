import { createSelector, createSlice } from '@reduxjs/toolkit';
import { dummyHabit1, dummyHabit2 } from './dummydata';

export interface Habit {
  id: number;
  name: string;
  xp: number;
}

interface State {
  habits: Habit[];
}

export const habitsSlice = createSlice({
  name: 'habits',
  initialState: [dummyHabit1, dummyHabit2],
  reducers: {
    habitAdded(state, action) {
      state.push(action.payload);
    },
  },
});

export const selectHabit = createSelector(
  [(state: State) => state.habits, (state: State, id: number) => id],
  (habits: Habit[], id: number) => habits[id],
);

export const selectHabits = (state: { habits: Habit[] }) => state.habits;

export const { habitAdded } = habitsSlice.actions;

export default habitsSlice.reducer;

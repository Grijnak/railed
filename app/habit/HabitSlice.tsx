import { createSlice } from '@reduxjs/toolkit';
import memoize from 'proxy-memoize';
import { RootState } from '../store';
import { dummyHabit1, dummyHabit2 } from './dummydata';

export type Habit = {
  id: number;
  name: string;
  xp: number;
};

type HabitState = {
  [key: string]: Habit;
};

const initialState: HabitState = {};
initialState[dummyHabit1.id] = dummyHabit1;
initialState[dummyHabit2.id] = dummyHabit2;

export const habitsSlice = createSlice({
  name: 'habits',
  initialState,
  reducers: {
    addXp(habits, action) {
      const { habitId, amount } = action.payload;
      const habit = habits[habitId];
      habit.xp += amount;
    },
  },
});

export const selectHabitIds = memoize((state: RootState) =>
  Object.keys(state.habits),
);

export const makeSelectHabitById = (id: string) =>
  memoize((state: RootState) => state.habits[id]);

export const makeSelectHabitNameById = (id: string) =>
  memoize((state: RootState) => state.habits[id].name);

export const makeSelectHabitXpById = (id: string) =>
  memoize((state: RootState) => state.habits[id].xp);
export const { addXp } = habitsSlice.actions;

export default habitsSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import memoize from 'proxy-memoize';
import { RootState } from '../store';
import { dummyHabit1, dummyHabit2 } from './dummydata';
import { getLevel, getMinXp } from './util/HabitUtils';

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

export const makeSelectHabitNameById = (id: string) =>
  memoize((state: RootState) => state.habits[id].name);

export const makeSelectHabitLevelProgressById = (id: string) =>
  memoize((state: RootState) => {
    const { xp } = state.habits[id];
    const level = getLevel(xp);
    const thisLevelXp = getMinXp(level);
    const nextLevelXp = getMinXp(level + 1);
    return {
      level,
      progress: ((xp - thisLevelXp) * 100) / (nextLevelXp - thisLevelXp),
    };
  });

export const { addXp } = habitsSlice.actions;

export default habitsSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import memoize from 'proxy-memoize';
import { RootState } from '../store';
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

export const habitsSlice = createSlice({
  name: 'habits',
  initialState,
  reducers: {
    addHabit(state, action) {
      const { name } = action.payload;
      const biggerId = (max: number, current: Habit) =>
        current.id > max ? current.id : max;
      const newId = Object.values(state).reduce(biggerId, -Infinity) + 1;
      state[String(newId)] = { id: newId, name, xp: 0 };
    },
    addXp(state, action) {
      const { habitId, amount } = action.payload;
      state[habitId].xp += amount;
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

export const { addHabit, addXp } = habitsSlice.actions;

export default habitsSlice.reducer;

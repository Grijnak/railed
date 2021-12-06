import { combineReducers, createStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import AsyncStorage from '@react-native-async-storage/async-storage';
import habitReducer from './habit/HabitSlice';

const rootReducer = combineReducers({
  habits: habitReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  hardSet,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer);
const persistor = persistStore(store);

type RootState = ReturnType<typeof store.getState>;

export { store, persistor, RootState };

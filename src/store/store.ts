import { configureStore, createReducer } from '@reduxjs/toolkit';
import {
  resetGame,
  setField,
  setLastConfig,
  setMinesMarked,
  setMinesTotal,
} from './actions';
import { useDispatch } from 'react-redux';
import { createInitState } from '../utils/createInit';
import { StateType } from '../types';

const initStore: StateType = {
  field: [],
  minesTotal: 0,
  minesMarked: 0,
  timeStart: 0,
  timeEnd: 0,
  lastConfig: null,
};

const reducer = createReducer(initStore, (builder) => {
  builder
    .addCase(setField, (state, action) => {
      state.field = action.payload;
      state.timeStart = new Date().getTime();
    })
    .addCase(setMinesTotal, (state, action) => {
      state.minesTotal = action.payload;
    })
    .addCase(setMinesMarked, (state, action) => {
      state.minesMarked = action.payload;
    })
    .addCase(setLastConfig, (state, action) => {
      state.lastConfig = action.payload;
    })
    .addCase(resetGame, (state) => {
      if (!state.lastConfig) return;
      state.field = createInitState(state.lastConfig);
      state.timeStart = new Date().getTime();
    });
});

const store = configureStore({ reducer });
export default store;

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

type StoreType = ReturnType<typeof store.getState>;

export const getField = (state: StoreType) => state.field;
export const getMinesTotal = (state: StoreType) => state.minesTotal;
export const getStartTime = (state: StateType) => state.timeStart;

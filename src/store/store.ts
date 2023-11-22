import { configureStore, createReducer } from '@reduxjs/toolkit';
import {
  addCellsToOpen,
  decreaseMinesTotal,
  increaseClearCells,
  increaseMinesTotal,
  resetGame,
  setCarcass,
  setField,
  setGameStatus,
  setLastConfig,
} from './actions';
import { useDispatch } from 'react-redux';
import { StateType } from '../types';

const initStore: StateType = {
  field: [],
  minesTotal: 0,
  timeStart: 0,
  timeEnd: 0,
  lastConfig: null,
  carcass: null,
  clearCells: 0,
  status: 'playing',
  cellsNeedToOpen: [],
};

const reducer = createReducer(initStore, (builder) => {
  builder
    .addCase(setField, (state, action) => {
      state.field = action.payload;
      state.timeStart = new Date().getTime();
    })
    .addCase(setLastConfig, (state, action) => {
      state.lastConfig = action.payload;
      state.minesTotal = (state.lastConfig?.mines as number) || 0;
    })
    .addCase(resetGame, (state) => {
      if (!state.lastConfig) return;
      state.field = [];
      state.clearCells = 0;
      state.timeStart = 0;
      state.minesTotal = state.lastConfig?.mines as number;
      state.status = 'playing';
      state.cellsNeedToOpen = [];
    })
    .addCase(setCarcass, (state, action) => {
      state.carcass = action.payload;
    })
    .addCase(increaseMinesTotal, (state) => {
      state.minesTotal += 1;
    })
    .addCase(decreaseMinesTotal, (state) => {
      state.minesTotal -= 1;
    })
    .addCase(increaseClearCells, (state) => {
      state.clearCells += 1;
    })
    .addCase(setGameStatus, (state, action) => {
      state.status = action.payload;
    })
    .addCase(addCellsToOpen, (state, action) => {
      state.cellsNeedToOpen = action.payload;
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
export const getCarcass = (state: StateType) => state.carcass;
export const getLastConfig = (state: StateType) => state.lastConfig;
export const getClearCells = (state: StateType) => state.clearCells;
export const getGameStatus = (state: StateType) => state.status;
export const getCellsToOpen = (state: StateType) => state.cellsNeedToOpen;

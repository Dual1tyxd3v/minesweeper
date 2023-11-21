import { configureStore, createReducer } from '@reduxjs/toolkit';
import { setField, setMinesMarked, setMinesTotal } from './actions';
import { useDispatch } from 'react-redux';

const initStore = {
  field: [],
  minesTotal: 0,
  minesMarked: 0,
  timeStart: 0,
  timeEnd: 0,
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
    });
});

const store = configureStore({ reducer });
export default store;

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

type StoreType = ReturnType<typeof store.getState>;

export const getField = (state: StoreType) => state.field;

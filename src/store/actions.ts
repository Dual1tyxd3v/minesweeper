import { createAction } from '@reduxjs/toolkit';

export const setField = createAction('setField', (value) => ({
  payload: value,
}));

export const setMinesTotal = createAction('setMinesTotal', (value) => ({
  payload: value,
}));

export const setMinesMarked = createAction('setMinesMarked', (value) => ({
  payload: value,
}));

export const setLastConfig = createAction('setLastConfig', (value) => ({
  payload: value,
}));

export const setCarcass = createAction('setCarcass', (value) => ({
  payload: value,
}));

export const resetGame = createAction('resetGame');

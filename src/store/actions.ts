import { createAction } from '@reduxjs/toolkit';

export const setField = createAction('setField', (value) => ({
  payload: value,
}));

export const setLastConfig = createAction('setLastConfig', (value) => ({
  payload: value,
}));

export const setCarcass = createAction('setCarcass', (value) => ({
  payload: value,
}));

export const setGameStatus = createAction('setGameStatus', (value) => ({
  payload: value,
}));

export const increaseClearCells = createAction('increaseClearCells');

export const resetGame = createAction('resetGame');

export const increaseMinesTotal = createAction('increaseMinesTotal');
export const decreaseMinesTotal = createAction('decreaseMinesTotal');

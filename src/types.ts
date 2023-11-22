import { config } from './utils/config';

export type GameSettings = {
  rows: number;
  columns: number;
  mines: number;
};

export type ConfigField = {
  rows: number | number[];
  columns: number | number[];
  mines: number | number[];
  name: string;
};

export type StateType = {
  minesTotal: number;
  minesMarked: number;
  timeStart: number;
  timeEnd: number;
  lastConfig: null | GameSettings;
  field: (string | null)[][];
  carcass: null | null[][]
};

export type Difficulty = keyof typeof config;

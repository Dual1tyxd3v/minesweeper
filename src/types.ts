import { config } from './utils/config';

export type GameSettings = {
  rows: number;
  columns: number;
  mines: number;
  name: string;
};

export type ConfigField = {
  rows: number | number[];
  columns: number | number[];
  mines: number | number[];
  name: string;
};

export type StateType = {
  minesTotal: number;
  timeStart: number;
  timeEnd: number;
  lastConfig: null | GameSettings;
  field: (string | null)[][];
  carcass: null | null[][];
  clearCells: number;
  status: 'playing' | 'win' | 'lose';
  cellsNeedToOpen: string[];
};

export type Difficulty = keyof typeof config;

export type StatsFieldType = {
  win: number;
  lose: number;
  best: number;
};

export type StatsType = {
  easy: StatsFieldType;
  medium: StatsFieldType;
  expert: StatsFieldType;
};

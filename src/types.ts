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

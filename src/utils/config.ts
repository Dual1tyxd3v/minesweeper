export const config = {
  easy: {
    rows: 9,
    columns: 9,
    mines: 10,
    name: 'easy'
  },
  medium: {
    rows: 16,
    columns: 16,
    mines: 40,
    name: 'medium'
  },
  expert: {
    rows: 16,
    columns: 30,
    mines: 99,
    name: 'expert'
  },
  custom: {
    rows: [3, 24],
    columns: [3, 30],
    mines: [2, 668],
    name: 'custom'
  },
};

export const CELL_SIZE = 25;

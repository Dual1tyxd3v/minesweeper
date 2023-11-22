import { GameSettings } from '../types';

export const createInitState = (
  { rows, columns, mines }: GameSettings,
  clicked: number
) => {
  console.log(clicked);
  let cells = new Array(rows * columns)
    .fill(null)
    .map((_, i) => (i === clicked - 1 ? null : i))
    .filter((el) => el);
  const minesOnIteration = [];
  const result = new Array(rows)
    .fill(null)
    .map(() => new Array(columns).fill(0));
  // узнаем на какой итерации засеивания установить мину
  for (let i = 0; i < mines; i++) {
    const index = Math.floor(Math.random() * cells.length);
    minesOnIteration.push(cells[index]);
    cells = [...cells.slice(0, index), ...cells.slice(index + 1)];
  }
  // засеиваем поле минами
  for (let i = 0, iteration = 0; i < rows; i++) {
    for (let k = 0; k < columns; k++) {
      if (minesOnIteration.includes(iteration)) {
        result[i][k] = 'x';
        if (result[i + 1]) {
          if (result[i + 1][k] !== 'x') result[i + 1][k]++;
          if (result[i + 1][k + 1] >= 0 && result[i + 1][k + 1] !== 'x')
            result[i + 1][k + 1]++;
          if (result[i + 1][k - 1] >= 0 && result[i + 1][k - 1] !== 'x')
            result[i + 1][k - 1]++;
        }

        if (result[i - 1]) {
          if (result[i - 1][k] !== 'x') result[i - 1][k]++;
          if (result[i - 1][k + 1] >= 0 && result[i - 1][k + 1] !== 'x')
            result[i - 1][k + 1]++;
          if (result[i - 1][k - 1] >= 0 && result[i - 1][k - 1] !== 'x')
            result[i - 1][k - 1]++;
        }

        if (result[i][k - 1] >= 0 && result[i][k - 1] !== 'x')
          result[i][k - 1]++;
        if (result[i][k + 1] >= 0 && result[i][k + 1] !== 'x')
          result[i][k + 1]++;
      }
      iteration++;
    }
  }

  return result;
};

export const createCarcass = ({ rows, columns }: GameSettings) => {
  return new Array(rows).fill(new Array(columns).fill(null));
};

import { GameSettings } from '../types';

export const createInitState = (
  { rows, columns, mines }: GameSettings,
  clicked: number
) => {
  let cells = new Array(rows * columns)
    .fill(null)
    .map((_, i) => i)
    .filter((el) => el !== clicked);

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

export const getNearbyCells2 = (
  ar: (string | number)[][],
  startRow: number,
  startColumn: number
) => {
  const result: string[] = [];
  const checked = [];
  const check = [`${startRow}:${startColumn}`];
  console.log('start')
  while (check.length) {
    console.log(check);
    const temp = check.pop() as string;
    const row = Number(temp.split(':')[0]);
    const column = Number(temp.split(':')[1]);

    checked.push(temp);
    // проверка правого соседа
    if (Number(ar[row][column + 1]) >= 0) {
      if (
        ar[row][column + 1] === 0 &&
        !checked.includes(`${row}:${column + 1}`)
      ) {
        check.push(`${row}:${column + 1}`);
      }
      result.push(`${row}:${column + 1}`);
    }
    // проверка левого соседа
    if (Number(ar[row][column - 1]) >= 0) {
      if (
        ar[row][column - 1] === 0 &&
        !checked.includes(`${row}:${column - 1}`)
      ) {
        check.push(`${row}:${column - 1}`);
      }
      result.push(`${row}:${column - 1}`);
    }

    // проверка врехнего ряда
    if (ar[row - 1]) {
      console.log('have up')
      // проверка правого соседа
      if (Number(ar[row - 1][column + 1]) >= 0) {
        if (
          ar[row - 1][column + 1] === 0 &&
          !checked.includes(`${row - 1}:${column + 1}`)
        ) {
          check.push(`${row - 1}:${column + 1}`);
        }
        result.push(`${row - 1}:${column + 1}`);
      }
      // проверка левого соседа
      if (Number(ar[row - 1][column - 1]) >= 0) {
        if (
          ar[row - 1][column - 1] === 0 &&
          !checked.includes(`${row - 1}:${column - 1}`)
        ) {
          check.push(`${row - 1}:${column - 1}`);
        }
        result.push(`${row - 1}:${column - 1}`);
      }
      // проверка над проверяемой точкой
      if (Number(ar[row - 1][column]) >= 0) {
        if (
          ar[row - 1][column] === 0 &&
          !checked.includes(`${row - 1}:${column}`)
        ) {
          check.push(`${row - 1}:${column}`);
        }
        result.push(`${row - 1}:${column}`);
      }
    }

    // проверка нижнего ряда
    if (ar[row + 1]) {
      console.log('have donw')
      // проверка правого соседа
      if (Number(ar[row + 1][column + 1]) >= 0) {
        if (
          ar[row + 1][column + 1] === 0 &&
          !checked.includes(`${row + 1}:${column + 1}`)
        ) {
          check.push(`${row + 1}:${column + 1}`);
        }
        result.push(`${row + 1}:${column + 1}`);
      }
      // проверка левого соседа
      if (Number(ar[row + 1][column - 1]) >= 0) {
        if (
          ar[row + 1][column - 1] === 0 &&
          !checked.includes(`${row + 1}:${column - 1}`)
        ) {
          check.push(`${row + 1}:${column - 1}`);
        }
        result.push(`${row + 1}:${column - 1}`);
      }
      // проверка под проверяемой точкой
      if (Number(ar[row + 1][column]) >= 0) {
        if (
          ar[row + 1][column - 1] === 0 &&
          !checked.includes(`${row + 1}:${column}`)
        ) {
          check.push(`${row + 1}:${column}`);
        }
        result.push(`${row + 1}:${column}`);
      }
    }
  }

  return [...new Set(result)];
};

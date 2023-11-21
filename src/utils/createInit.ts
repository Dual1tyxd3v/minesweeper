import { GameSettings } from '../types';

export const createInitState = ({ rows, columns, mines }: GameSettings) => {
  let cells = new Array(rows * columns).fill(null).map((_, i) => i);
  const minesOnIteration = [];
  const result = [];
  // узнаем на какой итерации засеивания установить мину
  for (let i = 0; i < mines; i++) {
    const index = Math.floor(Math.random() * cells.length);
    minesOnIteration.push(cells[index]);
    cells = [...cells.slice(0, index), ...cells.slice(index + 1)];
  }
  // засеиваем поле
  for (let i = 0, iteration = 0; i < rows; i++) {
    const row = [];
    for (let k = 0; k < columns; k++) {
      if (minesOnIteration.includes(iteration)) {
        row.push('.');
      } else {
        row.push(null);
      }
      iteration++;
    }
    result.push(row);
  }

  return result;
};

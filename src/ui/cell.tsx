import { useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import {
  getCellsToOpen,
  getClearCells,
  getField,
  getLastConfig,
  useAppDispatch,
} from '../store/store';
import { MouseEvent, useEffect, useState } from 'react';
import {
  addCellsToOpen,
  decreaseMinesTotal,
  increaseClearCells,
  increaseMinesTotal,
  setField,
  setGameStatus,
} from '../store/actions';
import { createInitState, getNearbyCells2 } from '../utils/createInit';
import { GameSettings } from '../types';
import Value from './value';
import { borderLightTop } from '../globalstyles';

type BlockProps = {
  isopen: string;
};

const Block = styled.div<BlockProps>`
  width: 2.5rem;
  height: 2.5rem;
  border: 1px solid var(--color-windows-border);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Minesweeper';
  ${(props) =>
    props.isopen === 'false' &&
    css`
      ${borderLightTop(2)}
    `}
`;

type CellProps = {
  rowIndex: number;
  columnIndex: number;
};

export default function Cell({ rowIndex, columnIndex }: CellProps) {
  const field = useSelector(getField);
  const config = useSelector(getLastConfig);
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [isMarked, setIsMarked] = useState(false);
  const clearCells = useSelector(getClearCells);
  const cellsToOpen = useSelector(getCellsToOpen);

  useEffect(() => {
    if (isOpen || !cellsToOpen.includes(`${rowIndex}:${columnIndex}`)) return;
    setIsOpen(true);
    dispatch(increaseClearCells());
  }, [cellsToOpen]);

  useEffect(() => {
    if (!field.length) {
      setIsOpen(false);
      setIsMarked(false);
    }
  }, [field]);

  useEffect(() => {
    if (!config) return;
    if (clearCells === config.columns * config.rows - config.mines - 1) {
      dispatch(setGameStatus('win'));
    }
  }, [clearCells, config, dispatch]);

  function clickHandler() {
    if (!field.length) {
      if (!config) return;
      const data = createInitState(
        config as GameSettings,
        rowIndex * config?.columns + columnIndex
      );
      dispatch(setField(data));
      if (!data[rowIndex][columnIndex]) {
        const cells = getNearbyCells2(
          data as (string | number)[][],
          rowIndex,
          columnIndex
        );
        dispatch(addCellsToOpen(cells));
      }
      setIsOpen(true);
      return;
    }
    if (isMarked || isOpen) return;
    if (field[rowIndex][columnIndex] !== 'x') {
      dispatch(increaseClearCells());
      if (!field[rowIndex][columnIndex]) {
        const data = getNearbyCells2(
          field as (string | number)[][],
          rowIndex,
          columnIndex
        );
        dispatch(addCellsToOpen(data));
      }
    } else {
      dispatch(setGameStatus('lose'));
    }
    setIsOpen(true);
  }

  function rightClickHandler(e: MouseEvent) {
    e.preventDefault();
    if (!field.length) return;

    dispatch(isMarked ? increaseMinesTotal() : decreaseMinesTotal());
    setIsMarked((prev) => !prev);
  }
  return (
    <Block
      isopen={isOpen.toString()}
      onContextMenu={rightClickHandler}
      onClick={clickHandler}
    >
      {field.length > 0 && isOpen && (
        <Value cellValue={field[rowIndex][columnIndex]?.toString() as string} />
      )}
      {!isOpen && isMarked && (
        <svg
          version="1.1"
          id="レイヤー_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100%"
          height="100%"
          viewBox="0 0 76 76"
          enableBackground="new 0 0 76 76"
        >
          <g>
            <g>
              <polygon points="35.999,55.5 35.999,16.5 40,16.5 40,55.5 35.999,55.5 		" />
              <polygon fill="#FF0000" points="40,13.875 19.375,27 40,40.125 		" />
              <rect x="28.571" y="51.625" width="18.857" height="5.5" />
              <rect x="20.222" y="56.459" width="35.555" height="7.041" />
            </g>
          </g>
        </svg>
      )}
    </Block>
  );
}

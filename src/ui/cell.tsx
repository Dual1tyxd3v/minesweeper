import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { getField, getLastConfig, useAppDispatch } from '../store/store';
import { MouseEvent } from 'react';
import { setField } from '../store/actions';
import { createInitState } from '../utils/createInit';
import { GameSettings } from '../types';
import Value from './value';

const Block = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border: 1px solid var(--color-windows-border);
  border-collapse: collapse;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Minesweeper';
`;

type CellProps = {
  rowIndex: number;
  columnIndex: number;
};

export default function Cell({ rowIndex, columnIndex }: CellProps) {
  const field = useSelector(getField);
  const config = useSelector(getLastConfig);
  const dispatch = useAppDispatch();

  function clickHandler(e: MouseEvent) {
    const button = e.button;
    if (!field.length) {
      if (button !== 0) return;
      dispatch(
        setField(
          createInitState(
            config as GameSettings,
            (rowIndex + 1) * (columnIndex + 1)
          )
        )
      );
    } else {
      return;
    }
  }
  return (
    <Block onClick={clickHandler}>
      {field.length > 0 && (
        <Value cellValue={field[rowIndex][columnIndex]?.toString() as string} />
      )}
    </Block>
  );
}

import styled, { css } from 'styled-components';
import { borderDarkTop } from '../globalstyles';
import { useSelector } from 'react-redux';
import { getCarcass, getGameStatus } from '../store/store';
import Cell from './cell';
import React from 'react';
import { CELL_SIZE } from '../utils/config';

type WrapperProps = {
  height: number;
  width: number;
};

const Wrapper = styled.div<WrapperProps>`
  margin: 0 auto;
  ${borderDarkTop(3)}
  display: flex;
  flex-wrap: wrap;
  position: relative;
  ${(props) =>
    css`
      height: ${props.height * CELL_SIZE + 6}px;
    `}
  ${(props) =>
    css`
      width: ${props.width * CELL_SIZE + 6}px;
    `}
`;

const Layout = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
`;

export default function Field() {
  const carcass = useSelector(getCarcass);
  const gameStatus = useSelector(getGameStatus);

  return (
    <Wrapper
      onSelect={(e) => e.preventDefault()}
      onMouseDown={(e) => e.preventDefault()}
      width={carcass?.[0].length || 0}
      height={carcass?.length || 0}
    >
      {gameStatus !== 'playing' && <Layout />}
      {carcass &&
        carcass.map((row, i) => (
          <React.Fragment key={`row_${i}`}>
            {row.map((_, k) => (
              <Cell key={`${i}_${k}`} rowIndex={i} columnIndex={k}></Cell>
            ))}
          </React.Fragment>
        ))}
    </Wrapper>
  );
}

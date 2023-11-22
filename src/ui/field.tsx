import styled, { css } from 'styled-components';
import { borderDarkTop } from '../globalstyles';
import { useSelector } from 'react-redux';
import { getCarcass } from '../store/store';
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
  ${(props) =>
    css`
      height: ${props.height * CELL_SIZE + 6}px;
    `}
  ${(props) =>
    css`
      width: ${props.width * CELL_SIZE + 6}px;
    `}
`;

export default function Field() {
  const carcass = useSelector(getCarcass);

  return (
    <Wrapper width={carcass?.[0].length || 0} height={carcass?.length || 0}>
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

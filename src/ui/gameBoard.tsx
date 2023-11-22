import styled from 'styled-components';
import ScoringBoard from './scoringBoard';
import { borderLightTop } from '../globalstyles';
import Field from './field';

const Wrapper = styled.div`
  ${borderLightTop(2)}
  padding: 5px 8px;
`;

export default function GameBoard() {
  return (
    <Wrapper>
      <ScoringBoard />
      <Field />
    </Wrapper>
  )
}

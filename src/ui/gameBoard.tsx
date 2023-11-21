import styled from 'styled-components';
import ScoringBoard from './scoringBoard';
import { borderLightTop } from '../globalstyles';

const Wrapper = styled.div`
  ${borderLightTop}
`;

export default function GameBoard() {
  return (
    <Wrapper>
      <ScoringBoard />
    </Wrapper>
  )
}

import styled from 'styled-components';
import ScoringBoard from './scoringBoard';

const Wrapper = styled.div`
  border-top: 2px solid #fff;
  border-left: 2px solid #fff;
  border-bottom: 2px solid #7b7b7b;
  border-right: 2px solid #7b7b7b;
  padding: 5px;
`;

export default function GameBoard() {
  return (
    <Wrapper>
      <ScoringBoard />
    </Wrapper>
  )
}

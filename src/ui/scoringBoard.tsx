import styled from 'styled-components';
import Smile from './smile';
import { borderDarkTop, borderLightTop } from '../globalstyles';

const Wrapper = styled.div`
  ${borderDarkTop}
  display: flex;
  padding: 5px 8px;
  justify-content: space-between;
`;

const StatusField = styled.p`
  font-family: 'Digital7';
  font-size: 3rem;
  color: #ff0000;
  background-color: #000;
  letter-spacing: 1px;
  ${borderDarkTop}
  width: 43px;
  text-align: center;
`;

const Button = styled.button`
  ${borderLightTop}
  background-color: transparent;
  width: 3.5rem;
  height: 3.5rem;
  cursor: pointer;
  background-color: transparent;

  &:focus {
    ${borderDarkTop}
  }
`;

export default function ScoringBoard() {
  return (
    <Wrapper>
      <StatusField>012</StatusField>
      <Button>
        <Smile />
      </Button>
      <StatusField>021</StatusField>
    </Wrapper>
  );
}

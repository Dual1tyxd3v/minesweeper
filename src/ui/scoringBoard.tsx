import styled from 'styled-components';
import Smile from './smile';
import { borderDarkTop, borderLightTop } from '../globalstyles';
import { useSelector } from 'react-redux';
import { getMinesTotal, useAppDispatch } from '../store/store';
import { useEffect, useState } from 'react';
import { resetGame } from '../store/actions';

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
  width: 48px;
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
  const minesTotal = useSelector(getMinesTotal);
  const [time, setTime] = useState(0);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  });

  function btnClickHandler() {
    dispatch(resetGame());
    setTime(0);
  }

  return (
    <Wrapper>
      <StatusField>{minesTotal.toString().padStart(3, '0')}</StatusField>
      <Button onClick={btnClickHandler}>
        <Smile />
      </Button>
      <StatusField>{time.toString().padStart(3, '0')}</StatusField>
    </Wrapper>
  );
}

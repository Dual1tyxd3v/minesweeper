import { useSelector } from 'react-redux';
import { getGameStatus } from '../store/store';
import styled from 'styled-components';
import { gameMessage } from '../utils/config';

const Message = styled.p`
  font-size: 1.6rem;
  text-align: center;
`;

export default function Result() {
  const gameStatus = useSelector(getGameStatus);

  if (gameStatus === 'playing') return null;

  const message = gameMessage[gameStatus as keyof typeof gameMessage];
  return <Message>{message}</Message>;
}

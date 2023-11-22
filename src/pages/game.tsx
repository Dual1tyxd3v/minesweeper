import { useSelector } from 'react-redux';
import { getCarcass } from '../store/store';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../ui/header';
import Wrapper from '../ui/wrapper';
import GameBoard from '../ui/gameBoard';
import { useEffect } from 'react';

const Menu = styled.ul`
  display: flex;
  margin-bottom: 0.5rem;
`;

const GameWrapper = styled(Wrapper)`
  min-width: 30rem;
`;

const GameHeader = styled(Header)`
  margin-bottom: 1rem;
`;

export default function Game() {
  const carcass = useSelector(getCarcass);
  const navigate = useNavigate();

  useEffect(() => {
    if (!carcass) navigate('/');
  }, [carcass, navigate]);

  return (
    <GameWrapper>
      <GameHeader>Minesweeper</GameHeader>
      <Menu>
        <li>
          <button>New game</button>
        </li>
        <li>
          <button>Help</button>
        </li>
      </Menu>
      <GameBoard />
    </GameWrapper>
  );
}

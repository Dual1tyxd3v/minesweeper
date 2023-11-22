import { useSelector } from 'react-redux';
import { getCarcass, useAppDispatch } from '../store/store';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../ui/header';
import Wrapper from '../ui/wrapper';
import GameBoard from '../ui/gameBoard';
import { useCallback, useEffect, useState } from 'react';
import Result from '../ui/result';
import { resetGame, setLastConfig } from '../store/actions';
import Help from '../ui/help';

const Menu = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
`;

const GameWrapper = styled(Wrapper)`
  min-width: 30rem;
  position: relative;
`;

const GameHeader = styled(Header)`
  margin-bottom: 1rem;
`;

const Button = styled.button`
  background-color: transparent;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 2rem;
  }

  &:hover {
    text-decoration: underline;
  }
`;

export default function Game() {
  const carcass = useSelector(getCarcass);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isHelpOpen, setIsHelpOpen] = useState(false);

  useEffect(() => {
    if (!carcass) navigate('/');
  }, [carcass, navigate]);

  function changeDiffHandler() {
    dispatch(resetGame());
    dispatch(setLastConfig(null));
    navigate('/');
  }

  const closeHelp = useCallback(() => setIsHelpOpen(false), []);

  return (
    <GameWrapper>
      <GameHeader>Minesweeper</GameHeader>
      <Menu>
        <Button onClick={changeDiffHandler}>Change difficulty</Button>
        <Button onClick={() => setIsHelpOpen(true)}>Help</Button>
      </Menu>
      <GameBoard />
      <Result />
      {isHelpOpen && <Help closeHelp={closeHelp} />}
    </GameWrapper>
  );
}

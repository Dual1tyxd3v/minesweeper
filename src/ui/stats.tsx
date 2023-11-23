import styled from 'styled-components';
import { borderLightTop } from '../globalstyles';
import Header from './header';
import { initialStats, resetStats } from '../utils/stats';
import StatsField from './statsField';
import Button from './button';
import { useState } from 'react';
import { StatsType } from '../types';

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-windows-bg);
  ${borderLightTop(2)};
  width: 45rem;
  padding: 3px 5px;
  z-index: 15;
`;

const Content = styled.div`
  padding: 0.5rem;
`;

const Warning = styled.p`
  color: red;
  font-weight: bold;
  text-align: center;
`;

const Controls = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

type StatsProp = {
  closeStats: () => void;
};

export default function Stats({ closeStats }: StatsProp) {
  const [stats, setStats] = useState<StatsType>(() =>
    JSON.parse(localStorage.getItem('stats') as string)
  );
  const statsArr = Object.entries(stats);
  return (
    <Wrapper>
      <Header>Stats</Header>
      <Content>
        {statsArr.map((field) => (
          <StatsField key={`${field[0]}_f`} name={field[0]} data={field[1]} />
        ))}
        <Warning>There is no stats for custom game</Warning>
        <Controls>
          <Button onClick={closeStats}>Close</Button>
          <Button
            onClick={() => {
              resetStats();
              setStats(initialStats);
            }}
          >
            Reset
          </Button>
        </Controls>
      </Content>
    </Wrapper>
  );
}

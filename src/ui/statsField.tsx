import styled from 'styled-components';
import { StatsFieldType } from '../types';
import { getWinRate } from '../utils/stats';

const Field = styled.fieldset`
  margin-bottom: 1rem;
  padding: 5px 10px;
`;

const Legend = styled.legend`
  text-transform: capitalize;
  font-weight: bold;
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 0.5rem;
`;

type StatsFieldProps = {
  name: string;
  data: StatsFieldType;
};

export default function StatsField({ name, data }: StatsFieldProps) {
  const { win, lose, best } = data;
  return (
    <Field>
      <Legend>{name}</Legend>
      <Stats>
        <p>Win: {win}</p>
        <p>Lose: {lose}</p>
        <p>Win Rate: {getWinRate(win, lose).toFixed(0)}%</p>
        <p>Best time: {best}</p>
      </Stats>
    </Field>
  );
}

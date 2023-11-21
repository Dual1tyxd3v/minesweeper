import styled from 'styled-components';
import { ChangeEvent } from 'react';
import { config } from '../utils/config';

const CustomDiv = styled.div`
  padding: 1rem 0;
  width: 25rem;
`;

const FormField = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;

const Input = styled.input`
  width: 10rem;
  padding: 0 5px;

  &:focus {
    outline: none;
  }
`;

type CustomFieldProps = {
  customDif: {
    rows: number;
    columns: number;
    mines: number;
  };
  customHandler: (e: ChangeEvent) => void;
};

export default function CustomField({
  customDif,
  customHandler,
}: CustomFieldProps) {
  const { rows, columns, mines } = customDif;
  const [minRows, maxRows] = config.custom.rows;
  const [minColumns, maxColumns] = config.custom.columns;
  const [minMines] = config.custom.mines;

  return (
    <CustomDiv>
      <FormField>
        <label htmlFor="height">
          <b>Height </b>({minRows}-{maxRows})
        </label>
        <Input
          onChange={customHandler}
          type="number"
          name="height"
          id="height"
          data-name="rows"
          value={rows}
          min={minRows}
          max={maxRows}
        />
      </FormField>
      <FormField>
        <label htmlFor="width">
          <b>Width </b>({minColumns}-{maxColumns})
        </label>
        <Input
          onChange={customHandler}
          type="number"
          name="width"
          id="width"
          data-name="columns"
          value={columns}
          min={minColumns}
          max={maxColumns}
        />
      </FormField>
      <FormField>
        <label htmlFor="mines">
          <b>Mines </b>({minMines}-{rows * columns - 1})
        </label>
        <Input
          onChange={customHandler}
          type="number"
          name="mines"
          id="mines"
          data-name="mines"
          value={mines}
          min={minMines}
          max={rows * columns - 1}
        />
      </FormField>
    </CustomDiv>
  );
}

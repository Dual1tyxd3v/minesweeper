import styled from 'styled-components';
import { ConfigField } from '../types';
import { ChangeEvent } from 'react';

const FormField = styled.div``;

type DifficultyFieldProps = {
  config: ConfigField;
  currDifficulty: string;
  radioBtnHandler: (e: ChangeEvent) => void;
};

export default function DifficultyField({
  config,
  currDifficulty,
  radioBtnHandler,
}: DifficultyFieldProps) {
  const { rows, columns, mines, name } = config;
  return (
    <FormField>
      <input
        type="radio"
        checked={currDifficulty === name}
        value={name}
        name="difficulty"
        id={name}
        onChange={radioBtnHandler}
      />
      <label htmlFor={name}>
        <p>{name}</p>
        <p>{typeof mines === 'number' && `${mines} mines`}</p>
        <p>{typeof rows === 'number' && `${rows} x ${columns} field`}</p>
      </label>
    </FormField>
  );
}

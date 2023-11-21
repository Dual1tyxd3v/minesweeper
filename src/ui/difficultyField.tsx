import styled from 'styled-components';
import { ConfigField } from '../types';
import { ChangeEvent } from 'react';

const FormField = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  text-align: left;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-windiws-border);
  }
`;

const Input = styled.input`
  margin-right: 2rem;
`;

const Label = styled.label`
  text-transform: capitalize;
`;

const Description = styled.p`
  font-size: 1.2rem;
  &:not(:last-child) {
    margin-top: 0.5rem;
  }
`;

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
      <Input
        type="radio"
        checked={currDifficulty === name}
        value={name}
        name="difficulty"
        id={name}
        onChange={radioBtnHandler}
      />
      <Label htmlFor={name}>
        <p>
          <b>{name}</b>
        </p>
        {typeof mines === 'number' && (
          <>
            <Description>{mines} mines</Description>
            <Description>
              {rows} x {columns} field
            </Description>
          </>
        )}
      </Label>
    </FormField>
  );
}

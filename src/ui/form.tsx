import { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import styled from 'styled-components';
import { config } from '../utils/config';
import DifficultyField from './difficultyField';
import CustomField from './customField';

const StyledForm = styled.form`
  padding: 0 2rem 1rem;
  width: 30rem;
  text-align: center;
`;

const Button = styled.button`
  width: 12rem;
  padding: 5px;
  background-color: var(--color-windows-bg);
  border-top: 2px solid #d7e3df;
  border-left: 2px solid #d7e3df;
  border-right: 2px solid #000;
  border-bottom: 2px solid #000;
  margin-top: 1rem;
  cursor: pointer;

  &:hover {
    outline: 1px solid #000;
  }

  &:focus {
    border-bottom: 2px solid #d7e3df;
    border-right: 2px solid #d7e3df;
    border-left: 2px solid #000;
    border-top: 2px solid #000;
  }
`;

export default function Form() {
  const [difficulty, setDifficulty] = useState('expert');
  const { rows, columns, mines } = config.custom;
  const [customDif, setCustomDif] = useState({
    rows: rows[0],
    columns: columns[0],
    mines: mines[0],
  });

  const radioBtnHandler = useCallback((e: ChangeEvent) => {
    const radioBtn = e.target as HTMLInputElement;
    setDifficulty(radioBtn.value);
  }, []);

  const customHandler = useCallback((e: ChangeEvent) => {
    const input = e.target as HTMLInputElement;
    const fieldName = input.dataset.name as string;

    setCustomDif((prev) => ({
      ...prev,
      [fieldName as keyof typeof customDif]: Number(input.value),
    }));
  }, []);

  function submitHandler(e: FormEvent) {
    e.preventDefault();

  }

  const menuData = Object.entries(config);
  return (
    <StyledForm onSubmit={submitHandler}>
      <div>
        {menuData.map((option, i) => (
          <DifficultyField
            key={`${i}_${option[1].name}`}
            config={option[1]}
            currDifficulty={difficulty}
            radioBtnHandler={radioBtnHandler}
          />
        ))}
      </div>
      {difficulty === 'custom' && (
        <CustomField customHandler={customHandler} customDif={customDif} />
      )}
      <Button>
        <span>Start</span>
      </Button>
    </StyledForm>
  );
}

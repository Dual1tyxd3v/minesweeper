import { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import styled from 'styled-components';
import { config } from '../utils/config';
import DifficultyField from './difficultyField';
import CustomField from './customField';
import { useAppDispatch } from '../store/store';
import { setCarcass, setLastConfig } from '../store/actions';
import { useNavigate } from 'react-router-dom';
import { Difficulty } from '../types';
import { createCarcass } from '../utils/createInit';
import Button from './button';

const StyledForm = styled.form`
  padding: 0 2rem 1rem;
  width: 30rem;
  text-align: center;
`;

export default function Form() {
  const [difficulty, setDifficulty] = useState<Difficulty>('expert');
  const { rows, columns, mines } = config.custom;
  const [customDif, setCustomDif] = useState({
    rows: rows[0],
    columns: columns[0],
    mines: mines[0],
  });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const radioBtnHandler = useCallback((e: ChangeEvent) => {
    const radioBtn = e.target as HTMLInputElement;
    setDifficulty(radioBtn.value as Difficulty);
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

    dispatch(
      setLastConfig(difficulty === 'custom' ? customDif : config[difficulty])
    );
    dispatch(
      setCarcass(
        createCarcass(difficulty === 'custom' ? customDif : config[difficulty])
      )
    );
    navigate('/game');
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

import { ChangeEvent, useCallback, useState } from 'react';
import styled from 'styled-components';
import { config } from '../utils/config';
import DifficultyField from './difficultyField';

const StyledForm = styled.form``;

const CustomField = styled.div``;

const FormField = styled.div``;

export default function Form() {
  const [difficulty, setDifficulty] = useState('expert');

  const radioBtnHandler = useCallback((e: ChangeEvent) => {
    const radioBtn = e.target as HTMLInputElement;
    setDifficulty(radioBtn.value);
  }, []);

  const menuData = Object.entries(config);
  console.log(menuData);
  return (
    <StyledForm>
      {menuData.map((option, i) => (
        <DifficultyField
          key={`${i}_${option[1].name}`}
          config={option[1]}
          currDifficulty={difficulty}
          radioBtnHandler={radioBtnHandler}
        />
      ))}
      {difficulty === 'custom' && (
        <CustomField>
          <FormField>
            <label htmlFor="height">Height</label>
            <input type="number" name="height" id="height" />
          </FormField>
          <FormField>
            <label htmlFor="width">Width</label>
            <input type="number" name="width" id="width" />
          </FormField>
          <FormField>
            <label htmlFor="mines">Mines amount</label>
            <input type="number" name="mines" id="mines" />
          </FormField>
        </CustomField>
      )}
    </StyledForm>
  );
}

import styled from 'styled-components';

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

export default Button;
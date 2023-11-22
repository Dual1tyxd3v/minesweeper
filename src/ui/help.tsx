import styled from 'styled-components'
import { borderLightTop } from '../globalstyles';
import Button from './button';

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${borderLightTop(2)};
  background-color: var(--color-windows-bg);
  text-align: center;
  width: 75%;
  padding: 1rem;
  z-index: 10;
`;

type HelpProps = {
  closeHelp: () => void;
}

export default function Help({closeHelp}: HelpProps) {
  return (
    <Wrapper>
      <p>Необходимо открыть все ячейки в которых нет мин</p>
      <Button onClick={closeHelp}>Ok</Button>
    </Wrapper>
  )
}

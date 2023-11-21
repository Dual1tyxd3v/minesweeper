import styled from 'styled-components';
import Form from '../ui/form';

const Wrapper = styled.div`
  width: 40vw;
  height: 60vh;
  background-color: var(--color-windows-bg);
  padding: 3px 5px;
`;

const Header = styled.h2`
  background: var(--lg-border);
  color: #fff;
  padding: 2px 5px;
  font-weight: 500;
`;

export default function Settings() {
  return (
    <Wrapper>
      <Header>
        Settings
      </Header>
      <Form />
    </Wrapper>
  )
}

import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #0200ac;
  color: #fff;
  padding: 2rem 1rem;
`;

const P = styled.p`
  &:not(:last-child) {
    margin-bottom: 4rem;
  }
`;
export default function Error() {
  return (
    <Wrapper>
      <P>
        A problem has been detected and Windows has been shut down to prevent
        damage to your computer.
      </P>
      <P>Its a joke =)</P>
      <P>Its works only on PC</P>
    </Wrapper>
  );
}

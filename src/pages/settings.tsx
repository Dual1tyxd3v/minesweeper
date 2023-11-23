import { useNavigate } from 'react-router-dom';
import Form from '../ui/form';
import Header from '../ui/header';
import Wrapper from '../ui/wrapper';
import { MIN_WIDTH } from '../utils/config';
import { useEffect } from 'react';

export default function Settings() {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.innerWidth < MIN_WIDTH) navigate('/error');
  }, []);

  return (
    <Wrapper>
      <Header>Settings</Header>
      <Form />
    </Wrapper>
  );
}

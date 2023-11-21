import { useSelector } from 'react-redux';
import { getField } from '../store/store';

export default function Game() {
  const field = useSelector(getField);
  console.log(field)
  return <div>game</div>;
}

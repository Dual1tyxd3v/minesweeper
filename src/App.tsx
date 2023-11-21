import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Settings from './pages/settings';
import Game from './pages/game';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Settings />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Settings from './pages/settings';
import Game from './pages/game';
import Error from './pages/error';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Settings />} />
        <Route path="/game" element={<Game />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

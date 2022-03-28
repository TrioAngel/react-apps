import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import XandO from './components/Game/XandO';
import Home from './components/Home';
import Quiz from './components/Quiz/Quiz';

function App() {
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/quiz' element={<Quiz />} />
        <Route path='/xando' element={<XandO />} />
      </Routes>
    </BrowserRouter>
  </>

  );
}

export default App;

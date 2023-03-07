import { useRef, useState } from 'react';
import './index.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import Designer from './pages/Designer/Designer';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/designer' element={<Designer />} />
        
        


      </Routes>
    </BrowserRouter>
  );
}

export default App;

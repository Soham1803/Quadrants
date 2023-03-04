import { useRef, useState } from 'react';
import './index.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="home" style={{color: '#0f0f0f'}}>
      <Home />
      
      
    </div>
  );
}

export default App;

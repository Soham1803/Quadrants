import { useRef, useState } from 'react';
import './index.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function App() {
  return (
    <div className="App" style={{color: '#0f0f0f'}}>
      <Canvas 
        style={{background: 'grey', width: '100vw', height: '100vh'}}
      >
        <ambientLight />
        <directionalLight
          args={[-5, 2, 0]} 
        />
        <mesh>
          <boxBufferGeometry
            args={[1, 1, 1]}
          />
          <meshStandardMaterial
            color={ 'red' } 
          />
        </mesh>
        
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;

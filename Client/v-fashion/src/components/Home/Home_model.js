import React from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const Home_model = () => {
  return (
    <div className='home-model'>
      <Canvas 
        className='home-canvas'
      >
        <hemisphereLight 
          args={[0xffffff, 0x080820, 1]}
        />
        <ambientLight />
        <directionalLight
          args={[-2, 0, 0]} 
        />
        <mesh>
          <boxBufferGeometry
            args={[2, 2, 2]}
          />
          <meshStandardMaterial
            color={ 'red' } 
          />
        </mesh>
        
        <OrbitControls />
      </Canvas>
    </div>
  )
}

export default Home_model
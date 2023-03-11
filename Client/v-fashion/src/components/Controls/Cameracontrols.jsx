import { OrbitControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react'
import { useModelCustomization, CameraModes } from '../../contexts/ModelCustomizationContext';
import * as THREE from 'three';

const cameraPositions = {
  [CameraModes.HEAD]:{
    position: new THREE.Vector3(0, 1.75, 1.5),
    target: new THREE.Vector3(0, 2, 0)
  },
  [CameraModes.TOP]:{
    position: new THREE.Vector3(0, 0.75, 2),
    target: new THREE.Vector3(0, 0.5, 0)
  },
  [CameraModes.BOTTOM]:{
    position: new THREE.Vector3(0, -0.75, 2.5),
    target: new THREE.Vector3(0, -0.8, 0)
  }
}


const Cameracontrols = () => {

  const { cameraMode, setCameraMode } = useModelCustomization();
  const orbitControls = useRef();

  useFrame((state, delta) => {
    // console.log(state.camera.position);
    if(cameraMode === CameraModes.FREE){
      return;
    }
    state.camera.position.lerp(cameraPositions[cameraMode].position, 3*delta);
    orbitControls.current.target.lerp(cameraPositions[cameraMode].target, 3*delta);

  });

  return (
    <>
      <OrbitControls ref={orbitControls} onStart={()=>{setCameraMode(CameraModes.FREE)}} />
    </>
  )
}

export default Cameracontrols
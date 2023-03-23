import React, {useRef, useEffect, Suspense} from "react";
import { Canvas, GridHelperProps, useThree } from "@react-three/fiber";
import { CameraShake, Environment, OrbitControls, Sparkles, useHelper } from "@react-three/drei";
import { Fashion_show_hall } from "../../components/Model_jsx/Fashion_show_hall";
import { Camera, SpotLightHelper } from "three";
import { VRButton, XR } from "@react-three/xr"
import { useXR, useFrame } from '@react-three/xr'
import VRCameracontrols from "../../components/Controls/VRCameracontrols";
import ReactMediaQuery from "../../utils/ReactMediaQuery";

const MovePlayer = () => {

  const { isPresenting, player } = useXR();

  useEffect(() => {
    if (isPresenting) {
      player.position.x = -5
      player.position.y = 0.25
      player.position.z = 15
    }
  }, [isPresenting])
}

const ImmersiveWorld = () => {

  const isPhone = ReactMediaQuery('(max-width: 400px)');

  


    const XRVButtonStyles = {
      zIndex: '2',
      backgroundColor:'greenyellow',
      borderStyle:'solid',
      position:'fixed',
      width:'6rem',
      heigth:'1rem',
      left: isPhone ? '40vw': '47vw',
      top:'85vh',
      
    

    }
    
    
  
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <VRButton
        style={XRVButtonStyles} 
      />
      <Canvas>
        <XR
          onSessionStart={() => {
            new Camera.prototype.position.set(-1, 2, 2);
          }}
        >
          <MovePlayer />
          <Suspense fallback={null} >
            <Fashion_show_hall />
          </Suspense>
          <OrbitControls />
          <Environment files='./assets/HDRIs/hansaplatz_4k.hdr' background blur={0.075} />
          <ambientLight args={[1]} />
          <pointLight args={[1]} position={[0,3.5,0]} />
          
          <spotLight args={[2, 3, 0]} />
          {/* <gridHelper args={[20]} />
          <axesHelper args={[20]} /> */}
        </XR>
      </Canvas>
    </div>
  );
};

export default ImmersiveWorld;

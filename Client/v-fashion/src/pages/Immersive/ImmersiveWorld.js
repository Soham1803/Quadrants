import React, {useRef} from "react";
import { Canvas, GridHelperProps } from "@react-three/fiber";
import { CameraShake, Environment, OrbitControls, useHelper } from "@react-three/drei";
import { Fashion_show_hall } from "../../components/Model_jsx/Fashion_show_hall";
import { SpotLightHelper } from "three";
import { VRButton, XR } from "@react-three/xr"

const ImmersiveWorld = () => {

  // const light = useRef();
  // useHelper(light, SpotLightHelper, 'red')
  
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <VRButton />
      <Canvas>
        <XR>
          <camera position={[-1, 0.5, 2]} />
          <Fashion_show_hall />
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

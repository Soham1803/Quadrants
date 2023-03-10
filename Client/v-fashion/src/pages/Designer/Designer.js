import React from 'react'
import Navbar from '../../components/Home/Navbar'
import Footer from '../../components/Home/Footer'
import Sidebar from '../../components/Home/Sidebar'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useAnimations, AccumulativeShadows, RandomizedLight, Plane } from '@react-three/drei'
import './designer.css'
import DesignerInterfaces from '../../components/Interfaces/DesignerInterfaces'

import { Clubbed_male_model } from '../../components/Model_jsx/Clubbed_maled_model'

import { Suspense, useState, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useEffect } from 'react'
import Cameracontrols from '../../components/Controls/Cameracontrols'

function Model1(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('assets/models/scene.glb')
  const { actions, names } = useAnimations(animations, group)

  useEffect(() => {
    actions[names[0]].reset().fadeIn(0.5).play();
  }, []);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="AmbientLight" position={[-0.15, 1.03, -0.23]} />
        <group name="Dynamite_by_meglb">
          <group name="Armature" position={[0, -3.5, 0.01]} scale={[3, 3, 3]}>
            <primitive object={nodes.Hips} />
            <skinnedMesh name="Wolf3D_Body" geometry={nodes.Wolf3D_Body.geometry} material={materials.Wolf3D_Body} skeleton={nodes.Wolf3D_Body.skeleton} />
            <skinnedMesh name="Wolf3D_Glasses" geometry={nodes.Wolf3D_Glasses.geometry} material={materials.Wolf3D_Glasses} skeleton={nodes.Wolf3D_Glasses.skeleton} />
            <skinnedMesh name="Wolf3D_Hair" geometry={nodes.Wolf3D_Hair.geometry} material={materials.Wolf3D_Hair} skeleton={nodes.Wolf3D_Hair.skeleton} />
            <skinnedMesh name="Wolf3D_Outfit_Bottom" geometry={nodes.Wolf3D_Outfit_Bottom.geometry} material={materials.Wolf3D_Outfit_Bottom} skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton} />
            <skinnedMesh name="Wolf3D_Outfit_Footwear" geometry={nodes.Wolf3D_Outfit_Footwear.geometry} material={materials.Wolf3D_Outfit_Footwear} skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton} />
            <skinnedMesh name="Wolf3D_Outfit_Top" geometry={nodes.Wolf3D_Outfit_Top.geometry} material={materials.Wolf3D_Outfit_Top} skeleton={nodes.Wolf3D_Outfit_Top.skeleton} />
            <skinnedMesh name="EyeLeft" geometry={nodes.EyeLeft.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeLeft.skeleton} morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary} morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences} />
            <skinnedMesh name="EyeRight" geometry={nodes.EyeRight.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeRight.skeleton} morphTargetDictionary={nodes.EyeRight.morphTargetDictionary} morphTargetInfluences={nodes.EyeRight.morphTargetInfluences} />
            <skinnedMesh name="Wolf3D_Head" geometry={nodes.Wolf3D_Head.geometry} material={materials.Wolf3D_Skin} skeleton={nodes.Wolf3D_Head.skeleton} morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences} />
            <skinnedMesh name="Wolf3D_Teeth" geometry={nodes.Wolf3D_Teeth.geometry} material={materials.Wolf3D_Teeth} skeleton={nodes.Wolf3D_Teeth.skeleton} morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences} />
          </group>
        </group>
        <directionalLight name="DirectionalLight" intensity={1} decay={2} color="#fcfcfc" position={[10.84, 6.88, -1.87]}>
          <group position={[0, 0, -1]} />
        </directionalLight>
      </group>
    </group>
  )
}

function Model2(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('assets/models/scene.glb')
  const { actions, names } = useAnimations(animations, group)


  useEffect(() => {
    actions[names[0]].reset().fadeIn(0.5).play();
  }, []);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="male_model1glb">
          <group name="Armature" position={[0, -4, -8]} scale={[3, 3, 3]}>
            <primitive object={nodes.Hips} />
            <skinnedMesh name="Wolf3D_Body" geometry={nodes.Wolf3D_Body.geometry} material={materials.Wolf3D_Body} skeleton={nodes.Wolf3D_Body.skeleton} />
            <skinnedMesh name="Wolf3D_Outfit_Bottom" geometry={nodes.Wolf3D_Outfit_Bottom.geometry} material={materials.Wolf3D_Outfit_Bottom} skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton} />
            <skinnedMesh name="Wolf3D_Outfit_Footwear" geometry={nodes.Wolf3D_Outfit_Footwear.geometry} material={materials.Wolf3D_Outfit_Footwear} skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton} />
            <skinnedMesh name="Wolf3D_Outfit_Top" geometry={nodes.Wolf3D_Outfit_Top.geometry} material={materials.Wolf3D_Outfit_Top} skeleton={nodes.Wolf3D_Outfit_Top.skeleton} />
            <skinnedMesh name="Wolf3D_Hair" geometry={nodes.Wolf3D_Hair.geometry} material={materials.Wolf3D_Hair} skeleton={nodes.Wolf3D_Hair.skeleton} />
            <skinnedMesh name="Wolf3D_Glasses" geometry={nodes.Wolf3D_Glasses.geometry} material={materials.Wolf3D_Glasses} skeleton={nodes.Wolf3D_Glasses.skeleton} />
            <skinnedMesh name="EyeLeft" geometry={nodes.EyeLeft.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeLeft.skeleton} morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary} morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences} />
            <skinnedMesh name="EyeRight" geometry={nodes.EyeRight.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeRight.skeleton} morphTargetDictionary={nodes.EyeRight.morphTargetDictionary} morphTargetInfluences={nodes.EyeRight.morphTargetInfluences} />
            <skinnedMesh name="Wolf3D_Head" geometry={nodes.Wolf3D_Head.geometry} material={materials.Wolf3D_Skin} skeleton={nodes.Wolf3D_Head.skeleton} morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences} />
            <skinnedMesh name="Wolf3D_Teeth" geometry={nodes.Wolf3D_Teeth.geometry} material={materials.Wolf3D_Teeth} skeleton={nodes.Wolf3D_Teeth.skeleton} morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences} />
          </group>
        </group>
        <group name="AmbientLight" />
      </group>
    </group>
  )
}


const Designer = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className='designer'>
        
        
        {/* <Canvas className='customize-model'> */}
        {/* <div className="sketchfab-embed-wrapper"> 
          {/* <iframe 
            title="Cute girl sitting on chair(SUL)" 
            frameBorder="0" 
            allowFullScreen mozallowfullscreen="true" 
            webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" 
            xr-spatial-tracking='true' 
            execution-while-out-of-viewport='true' 
            execution-while-not-rendered='true' 
            web-share='true' 
            src="https://sketchfab.com/models/c347433ba39345b899ad98721b1dd0b2/embed"> 
          </iframe>  
        </div>   */}
          <div className='design-model'>
            <Canvas  shadows >
              <Suspense fallback={null}>
                <Cameracontrols />
                <ambientLight intensity={0.2}/>
                <directionalLight position={[0.25,1,1.5]} castShadow/>
                {/* <Model1 /> */}
                {/* <Model2 /> */}
                <Plane
                  receiveShadow
                  rotation={[-Math.PI / 2, 0, 0]}
                  position={[0, -2.5, 0]}
                  args={[10, 10]}
                ></Plane>
                {/* <AccumulativeShadows frames={100} alphaTest={0.85} opacity={0.75} scale={10} position={[0, -1.3, 0]}>
                  <RandomizedLight amount={8} radius={1.5} ambient={0.5} intensity={0.75} position={[3, 2, 4]} bias={0.001} />
                </AccumulativeShadows> */}
                <Clubbed_male_model/>
                {/* <OrbitControls /> */}
              </Suspense>
            </Canvas>
            <DesignerInterfaces />
          </div>  
        

        {/* </Canvas> */}
        
      </div>
      <Footer />
    </>
  )
}

export default Designer
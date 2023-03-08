import React from 'react'
import Navbar from '../../components/Home/Navbar'
import Footer from '../../components/Home/Footer'
import Sidebar from '../../components/Home/Sidebar'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useAnimations } from '@react-three/drei'
import './designer.css'

import { Suspense, useState, useRef } from 'react'
import { useGLTF } from '@react-three/drei'

function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('assets/models/scene.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="AmbientLight" position={[-0.15, 1.03, -0.23]} />
        <group name="Dynamite_by_meglb">
          <group name="Armature" position={[0, -8, 0.01]} scale={[5, 5, 5]}>
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


const Designer = () => {
  return (
    <div className='designer'>
      <Navbar />
      <Sidebar />
      {/* <Canvas className='customize-model'> */}
      <div className="sketchfab-embed-wrapper"> 
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
        </iframe>  */}
      </div>  
        <Canvas>
          <Suspense fallback={null}>
            <ambientLight />
            <Model />
            <OrbitControls />
          </Suspense>
        </Canvas>
        
      

      {/* </Canvas> */}
      <Footer />
    </div>
  )
}

export default Designer
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 Fashion_show_hall.glb
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Fashion_show_hall(props) {
  const { nodes, materials } = useGLTF("assets/models/Fashion_show_hall.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[0, 4.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            geometry={nodes.Cylinder__0.geometry}
            material={nodes.Cylinder__0.material}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[1327.45, 1327.45, 501.95]}
          />
          <mesh
            geometry={nodes.Cylinder001__0.geometry}
            material={nodes.Cylinder001__0.material}
            position={[0, -213.76, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[2287.58, 2287.58, 661.65]}
          >
            <meshStandardMaterial
              metalness={0.8}
              roughness={0.1}
            />
          </mesh>
          <mesh
            geometry={nodes.Cylinder003__0.geometry}
            material={materials.Cylinder__0}
            position={[0, 46.15, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[1327.45, 1327.45, 501.95]}
          />
          <mesh
            geometry={nodes.Cylinder004__0.geometry}
            material={materials.Cylinder__0}
            position={[0, 343.93, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[1940.38, 1940.38, 733.72]}
          />
          <mesh
            geometry={nodes.Cylinder005__0.geometry}
            material={materials.Cylinder__0}
            position={[0, 463.77, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[2630.11, 2630.11, 786.07]}
          />
          <mesh
            geometry={nodes.Cylinder006__0.geometry}
            material={materials.Cylinder__0}
            position={[0, 417.74, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[3366.38, 3366.38, 676.56]}
          />
          <mesh
            geometry={nodes.Cylinder007_Material002_0.geometry}
            material={materials["Material.002"]}
            position={[0, -491.11, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[1664.06, 1664.06, 181.85]}
          />
          <mesh
            geometry={nodes.Cylinder008_Material002_0.geometry}
            material={materials["Material.002"]}
            position={[0, -430.18, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[2429.87, 2429.87, 103.57]}
          />
          <mesh
            geometry={nodes.Cylinder009_Material002_0.geometry}
            material={materials["Material.002"]}
            position={[0, -365.18, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[3246.55, 3246.55, 103.57]}
          />
          <mesh
            geometry={nodes.Cylinder010_Material002_0.geometry}
            material={materials["Material.002"]}
            position={[0, -296.99, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[4105.58, 4105.58, 103.57]}
          />
          <mesh
            geometry={nodes.Cylinder012_Material004_0.geometry}
            material={materials["Material.004"]}
            position={[0, -213.76, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[2287.58, 2287.58, 661.65]}
          />
          <mesh
            geometry={nodes.Cylinder013__0.geometry}
            material={materials.Cylinder__0}
            position={[0, -213.76, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[2287.58, 2287.58, 661.65]}
          />
          <mesh
            geometry={nodes.Cylinder014_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[0, 444.25, 0]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={[-2140.55, -2140.55, -41.44]}
          />
          <mesh
            geometry={nodes.Cylinder015__0.geometry}
            material={nodes.Cylinder015__0.material}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[1327.45, 1327.45, 501.95]}
          >
            <mesh
              geometry={nodes.Cube.geometry}
              material={nodes.Cube.material}
              position={[0, 0, -0.94]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.6, 0.03, 0.08]}
            >
              <meshStandardMaterial
                color='0xa614a6'
                metalness={.8}
                roughness={0.3}
              />
            </mesh>
            <mesh
              geometry={nodes.Cube001.geometry}
              // material={nodes.Cube001.material}
              position={[0, 0, -0.94]}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
              scale={[0.6, 0.03, 0.08]}
            >
              <meshStandardMaterial
                color='0xb0b017'
                metalness={.8}
                roughness={0.3}
              />
            </mesh>  
            <mesh
              geometry={nodes.Cube002.geometry}
              material={nodes.Cube002.material}
              position={[0, 0, -0.91]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.08, 0.01, 0.08]}
            >
              <meshStandardMaterial
                color='black'
                metalness={.8}
                roughness={0.3}
              />
            </mesh>  
          </mesh>
          <mesh
            geometry={nodes.Cylinder016_Material009_0.geometry}
            material={nodes.Cylinder016_Material009_0.material}
            position={[0, 691.04, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[-998.13, -998.13, -73.47]}
          >
            <meshStandardMaterial
              metalness={0.8}
              roughness={0.1}
            />
          </mesh>
          <mesh
            geometry={nodes.Torus011__0.geometry}
            material={materials.Cylinder__0}
            position={[0, 929.59, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={-1351.92}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("assets/models/Fashion_show_hall.glb");

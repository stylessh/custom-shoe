import { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import useShoeStore from "../store/shoe";

export default function Model({ preview }) {
  const { nodes, materials } = useGLTF("/assets/gltf/shoe.gltf");
  const [hovered, setHovered] = useState(null);

  const { items, setCurrent } = useShoeStore((state) => state);

  if (preview)
    return (
      <group dispose={null} scale={[1, 1, 1]}>
        <mesh
          geometry={nodes.shoe.geometry}
          material={materials.laces}
          material-color={items.laces}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.shoe_1.geometry}
          material={materials.mesh}
          material-color={items.mesh}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.shoe_2.geometry}
          material={materials.caps}
          material-color={items.caps}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.shoe_3.geometry}
          material={materials.inner}
          material-color={items.inner}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.shoe_4.geometry}
          material={materials.sole}
          material-color={items.sole}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.shoe_5.geometry}
          material={materials.stripes}
          material-color={items.stripes}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.shoe_6.geometry}
          material={materials.band}
          material-color={items.band}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.shoe_7.geometry}
          material={materials.patch}
          material-color={items.patch}
          castShadow
          receiveShadow
        />
      </group>
    );

  return (
    <group
      dispose={null}
      scale={[1, 1, 1]}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(e.object.material.name);
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        setHovered(null);
      }}
      onPointerDown={(e) => {
        e.stopPropagation();
        setCurrent(e.object.material.name);
      }}
      onPointerMissed={() => {
        setCurrent(null);
      }}
    >
      <mesh
        geometry={nodes.shoe.geometry}
        material={materials.laces}
        material-color={items.laces}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.shoe_1.geometry}
        material={materials.mesh}
        material-color={items.mesh}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.shoe_2.geometry}
        material={materials.caps}
        material-color={items.caps}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.shoe_3.geometry}
        material={materials.inner}
        material-color={items.inner}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.shoe_4.geometry}
        material={materials.sole}
        material-color={items.sole}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.shoe_5.geometry}
        material={materials.stripes}
        material-color={items.stripes}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.shoe_6.geometry}
        material={materials.band}
        material-color={items.band}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.shoe_7.geometry}
        material={materials.patch}
        material-color={items.patch}
        castShadow
        receiveShadow
      />
    </group>
  );
}

useGLTF.preload("/assets/gltf/shoe.gltf");

import { DoubleSide } from "three";

const Showcase = () => {
  return (
    <group>
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.52, 0]}
        castShadow
        receiveShadow
      >
        <planeGeometry attach="geometry" args={[3, 3]} />
        <meshStandardMaterial
          attach="material"
          color="#fff"
          side={DoubleSide}
        />
      </mesh>

      <mesh position={[0, 0.23, -1.5]} castShadow receiveShadow>
        <planeGeometry attach="geometry" args={[3, 3 / 2]} />
        <meshStandardMaterial
          attach="material"
          color="#fff"
          side={DoubleSide}
        />
      </mesh>

      <mesh
        rotation={[0, -Math.PI / 2, 0]}
        position={[-1.5, 0.23, 0]}
        castShadow
        receiveShadow
      >
        <planeGeometry attach="geometry" args={[3, 3 / 2]} />
        <meshStandardMaterial
          attach="material"
          color="#fff"
          side={DoubleSide}
        />
      </mesh>
    </group>
  );
};

export default Showcase;

import { useRef, useEffect } from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import gsap from "gsap";

import useShoeStore from "../store/shoe";

const Camera = () => {
  const cameraRef = useRef();
  const orbitRef = useRef();

  const { exportMode, setShowScreenshotButton } = useShoeStore(
    (state) => state
  );

  useEffect(() => {
    gsap.to(cameraRef.current.position, {
      x: 2,
      y: 2,
      z: 2,

      duration: 3,
      delay: 1,
      ease: "power4.inOut",
    });
  }, []);

  useEffect(() => {
    if (exportMode) {
      const tl = gsap.timeline();

      tl.to(cameraRef.current.position, {
        x: 52,
        y: -48.8,
        z: 52,

        duration: 3,
        ease: "power4.inOut",
      }).to(orbitRef.current.target, {
        x: 50,
        y: -50,
        z: 50,

        duration: 2,
        ease: "power4.inOut",

        onComplete: () => {
          setShowScreenshotButton(true);
        },
      });
    }
  }, [exportMode]);

  return (
    <>
      {/* camera */}
      <PerspectiveCamera
        makeDefault
        ref={cameraRef}
        position={[-2, 4, 8]}
        fov={45}
        aspect={window.innerWidth / window.innerHeight}
        near={0.1}
        far={1000}
      />

      {/* orbit  */}
      <OrbitControls enableDamping={true} ref={orbitRef} />
    </>
  );
};

export default Camera;

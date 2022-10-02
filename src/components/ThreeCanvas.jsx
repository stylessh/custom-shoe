import { useRef, Suspense } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { EffectComposer, Noise } from "@react-three/postprocessing";
import { motion } from "framer-motion";

import Shoe from "./Shoe";
import Lights from "./Lights";
import Camera from "./Camera";
import Showcase from "./Showcase";
import LoadingScreen from "./LoadingScreen";

import useShoeStore from "../store/shoe";

const ScreenshotButton = () => {
  const { gl } = useThree();

  const takeScreenshot = () => {
    const link = document.createElement("a");

    link.setAttribute("download", "canvas.png");
    link.setAttribute(
      "href",
      gl.domElement
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream")
    );
    link.click();
  };

  return (
    <Html className="!static !transform-none">
      <button
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0 }}
        className="absolute right-10 bottom-10 py-2 px-8 border border-black hover:bg-black hover:text-white transition"
        onClick={() => takeScreenshot()}
      >
        Take Screenshot
      </button>
    </Html>
  );
};

const ThreeCanvas = () => {
  const { showScreenshotButton } = useShoeStore((state) => state);

  return (
    <Canvas
      camera={{ manual: true }}
      fallback={<LoadingScreen />}
      style={{ width: "100vw", height: "100vh" }}
      performance={{ min: 1, max: 1 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Lights />

      <Camera />

      {/* fog */}
      <fog attach="fog" args={["#fff", 0, 30]} />

      {/* Config shoe */}
      <Suspense>
        <Shoe />
      </Suspense>

      {/* Showcase shoe */}
      <group position={[50, -50, 50]}>
        {/* open cube */}
        <Showcase />

        <Shoe preview />
      </group>

      <EffectComposer>
        <Noise opacity={0.2} />
      </EffectComposer>

      {/* {showScreenshotButton && <ScreenshotButton />} */}
    </Canvas>
  );
};

export default ThreeCanvas;

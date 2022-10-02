import React from "react";

const Lights = () => {
  return (
    <>
      {/* ambient light */}
      <ambientLight intensity={0.3} />

      {/* spotLight */}
      <spotLight
        position={[10, 10, 10]}
        angle={0.5}
        intensity={0.6}
        color="#fff"
      />

      {/* pointLight */}
      <pointLight position={[0, 0, -2]} intensity={0.2} color="#fff" />

      {/* spotLight */}
      <spotLight
        position={[55, -55, 55]}
        angle={0.5}
        intensity={0.1}
        color="#fff"
      />

      {/* pointLight */}
      <pointLight position={[51, -50, 50]} intensity={0.5} color="#fff" />
    </>
  );
};

export default Lights;

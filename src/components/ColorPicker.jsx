import { useEffect, useRef } from "react";
import { HexColorPicker } from "react-colorful";
import useShoeStore from "../store/shoe";

import { motion } from "framer-motion";

const ColorPicker = () => {
  const { current, setColor, items } = useShoeStore();

  const colorPickerRef = useRef(null);

  const handleColorChange = (color) => {
    setColor(current, color);
  };

  return (
    <motion.div
      key="color-picker"
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 10 }}
      exit={{ opacity: 0 }}
      className="z-50 absolute top-20 left-20"
      ref={colorPickerRef}
    >
      <h3 className="text-4xl text-center mb-4 font-bold">{current}</h3>

      <HexColorPicker
        color={items[current]}
        onChange={handleColorChange}
        className="drop-shadow-md"
      />
    </motion.div>
  );
};

export default ColorPicker;

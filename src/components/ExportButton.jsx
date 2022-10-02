import useShoeStore from "../store/shoe";
import { motion } from "framer-motion";

const ExportButton = () => {
  const { setExportMode, setCurrent } = useShoeStore((state) => state);

  return (
    <motion.button
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 1, delay: 2 }}
      exit={{ opacity: 0 }}
      className="absolute right-10 bottom-10 py-2 px-8 border border-black hover:bg-black hover:text-white transition"
      onClick={() => {
        setExportMode(true);
        setCurrent(null);
      }}
    >
      Export
    </motion.button>
  );
};

export default ExportButton;

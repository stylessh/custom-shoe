import ColorPicker from "./components/ColorPicker";
import ThreeCanvas from "./components/ThreeCanvas";
import ExportButton from "./components/ExportButton";

import useShoeStore from "./store/shoe";

const App = () => {
  const { current, exportMode } = useShoeStore();

  return (
    <>
      {current && <ColorPicker />}

      <ThreeCanvas />

      {!exportMode && <ExportButton />}
    </>
  );
};

export default App;

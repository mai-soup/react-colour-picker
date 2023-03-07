import Palette from "./Palette";
import seedColours from "./seedColours";
import generatePalette from "./colourHelpers";
import { Route, Routes } from "react-router-dom";
import { useParams } from "react-router-dom";
import PaletteList from "./PaletteList";
import SingleColourPalette from "./SingleColourPalette";

function App() {
  function GetPalette() {
    const { id } = useParams();
    const found = seedColours.find(p => {
      return p.id === id;
    });
    const palette = generatePalette(found);
    return <Palette palette={palette} />;
  }
  return (
    <Routes>
      <Route path="/" element={<PaletteList palettes={seedColours} />} />
      <Route path="/palette/:id" element={<GetPalette />} />
      <Route
        path="/palette/:paletteId/:colourId"
        element={<SingleColourPalette />}
      />
    </Routes>
  );
}

export default App;

import Palette from "./Palette";
import seedColours from "./seedColours";
import generatePalette from "./colourHelpers";
import { Route, Routes, useParams } from "react-router-dom";
import PaletteList from "./PaletteList";
import SingleColourPalette from "./SingleColourPalette";
import NewPaletteForm from "./NewPaletteForm";
import { useState } from "react";

function App() {
  const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
  const [palettes, setPalettes] = useState(savedPalettes || seedColours);
  function GetPalette() {
    const { id } = useParams();
    const found = palettes.find(p => {
      return p.id === id;
    });
    const palette = generatePalette(found);
    return <Palette palette={palette} />;
  }
  function GetSingleColourPalette() {
    const { paletteId, colourId } = useParams();
    const bigPalette = generatePalette(
      palettes.find(p => {
        return p.id === paletteId;
      })
    );

    // map shade to only contain the one whose id was passed
    // the filter -> true gets rid of "holes" in the sparse array
    // slice(1) to remove the '50' shade which is only needed for generation
    const subPalette = {
      ...bigPalette,
      colors: bigPalette.colors
        .map(arrOfLevel => arrOfLevel.filter(c => c.id === colourId)[0])
        .filter(() => true)
        .slice(1),
    };

    return <SingleColourPalette palette={subPalette} />;
  }

  const savePalette = newPalette => {
    const updatedPalettes = [...palettes, newPalette];
    setPalettes(updatedPalettes);
    window.localStorage.setItem("palettes", JSON.stringify(updatedPalettes));
  };

  return (
    <Routes>
      <Route path="/" element={<PaletteList palettes={palettes} />} />
      <Route
        path="/palette/new"
        element={
          <NewPaletteForm savePalette={savePalette} palettes={palettes} />
        }
      />
      <Route path="/palette/:id" element={<GetPalette />} />
      <Route
        path="/palette/:paletteId/:colourId"
        element={<GetSingleColourPalette />}
      />
    </Routes>
  );
}

export default App;

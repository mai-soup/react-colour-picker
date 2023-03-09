import Palette from "./Palette";
import seedColours from "./seedColours";
import generatePalette from "./colourHelpers";
import { Route, Routes, useParams, useLocation } from "react-router-dom";
import PaletteList from "./PaletteList";
import SingleColourPalette from "./SingleColourPalette";
import NewPaletteForm from "./NewPaletteForm";
import { useState, useEffect } from "react";

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
    storePalettes(updatedPalettes);
  };

  const handleDelete = toDelId => {
    const updatedPalettes = palettes.filter(p => p.id !== toDelId);
    storePalettes(updatedPalettes);
  };

  const storePalettes = updatedPalettes => {
    setPalettes(updatedPalettes);
    window.localStorage.setItem("palettes", JSON.stringify(updatedPalettes));
  };

  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState("fadeIn");
  useEffect(() => {
    if (location !== displayLocation) setTransistionStage("fadeOut");
  }, [location, displayLocation]);

  return (
    <div
      className={`${transitionStage}`}
      onAnimationEnd={() => {
        if (transitionStage === "fadeOut") {
          setTransistionStage("fadeIn");
          setDisplayLocation(location);
        }
      }}
    >
      <Routes location={displayLocation}>
        <Route
          path="/"
          element={
            <PaletteList palettes={palettes} handleDelete={handleDelete} />
          }
        />
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
    </div>
  );
}

export default App;

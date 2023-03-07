import Palette from "./Palette";
import seedColours from "./seedColours";
import generatePalette from "./colourHelpers";

function App() {
  return (
    <div className="App">
      <Palette palette={generatePalette(seedColours[1])} />
    </div>
  );
}

export default App;

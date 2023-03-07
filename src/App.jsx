import Palette from "./Palette";
import seedColours from "./seedColours";
import generatePalette from "./colourHelpers";

function App() {
  console.log(generatePalette(seedColours[1]));
  return (
    <div className="App">
      <Palette {...seedColours[1]} />
    </div>
  );
}

export default App;

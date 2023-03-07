import Palette from "./Palette";
import seedColours from "./seedColours";

function App() {
  return (
    <div className="App">
      <Palette {...seedColours[1]} />
    </div>
  );
}

export default App;

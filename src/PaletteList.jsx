import { Link } from "react-router-dom";

const PaletteList = ({ palettes }) => {
  return (
    <div>
      <h1>Colours woooo</h1>
      {palettes.map(p => (
        <p>
          <Link to={`/palette/${p.id}`}>{p.paletteName}</Link>
        </p>
      ))}
    </div>
  );
};

export default PaletteList;

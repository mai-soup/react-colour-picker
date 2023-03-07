import ColourBox from "./ColourBox";
import "./Palette.css";
import { useState } from "react";
import Navbar from "./Navbar";

const Palette = ({ palette }) => {
  const [level, setLevel] = useState(500);
  const levelChanged = newLevel => {
    setLevel(newLevel);
  };
  return (
    <div className="Palette">
      <Navbar {...{ level, levelChanged }} />
      <div className="Palette-colours">
        {palette.colors[level].map(c => (
          <ColourBox background={c.hex} name={c.name} />
        ))}
      </div>
      {/* TODO: footer */}
    </div>
  );
};

export default Palette;

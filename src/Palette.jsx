import ColourBox from "./ColourBox";
import "rc-slider/assets/index.css";
import "./Palette.css";
import Slider from "rc-slider";
import { useState } from "react";

const Palette = ({ palette }) => {
  const [level, setLevel] = useState(500);
  const levelChanged = newLevel => {
    setLevel(newLevel);
  };
  return (
    <div className="Palette">
      <div className="slider">
        <Slider
          defaultValue={level}
          min={100}
          max={900}
          step={100}
          onChange={levelChanged}
        />
      </div>
      {/* TODO: navbar */}
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

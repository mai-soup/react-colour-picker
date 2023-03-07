import ColourBox from "./ColourBox";
import "./Palette.css";
import { useState } from "react";
import Navbar from "./Navbar";

const Palette = ({ palette }) => {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState("hex");
  const levelChanged = newLevel => {
    setLevel(newLevel);
  };
  const handleFormatChange = fmt => {
    setFormat(fmt);
  };
  return (
    <div className="Palette">
      <Navbar {...{ level, levelChanged, handleFormatChange }} />
      <div className="Palette-colours">
        {palette.colors[level].map(c => (
          <ColourBox background={c[format]} name={c.name} />
        ))}
      </div>
      {/* TODO: footer */}
    </div>
  );
};

export default Palette;

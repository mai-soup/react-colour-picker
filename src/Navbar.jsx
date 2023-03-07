import "rc-slider/assets/index.css";
import "./Navbar.css";
import Slider from "rc-slider";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useState } from "react";

const Navbar = ({ level, levelChanged, handleFormatChange }) => {
  const [format, setFormat] = useState("hex");
  const onFormatChange = e => {
    setFormat(e.target.value);
    handleFormatChange(e.target.value);
  };
  return (
    <header className="Navbar">
      <div className="logo">
        <a href="/">reactcolourpicker</a>
      </div>
      <div className="slider-container">
        <span>Level: {level}</span>
        <div className="slider">
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            onChange={levelChanged}
          />
        </div>
      </div>
      <div className="select-container">
        <InputLabel id="format-select-label">Format</InputLabel>
        <Select
          labelId="format-select-label"
          id="format-select"
          value={format}
          label="Format"
          onChange={onFormatChange}
        >
          <MenuItem value="hex">HEX - #ffffff</MenuItem>
          <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
          <MenuItem value="rgba">RGBA - rgba(255,255,255,1.0)</MenuItem>
        </Select>
      </div>
    </header>
  );
};

export default Navbar;

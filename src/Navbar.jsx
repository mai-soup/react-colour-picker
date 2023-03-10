import "rc-slider/assets/index.css";
import Slider from "rc-slider";
import { InputLabel, MenuItem, Select, FormControl } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Root,
  Logo,
  SliderContainer,
  LevelControlsContainer,
} from "./styles/Navbar.styles";

const Navbar = ({ level, levelChanged, handleFormatChange, hideLevel }) => {
  const [format, setFormat] = useState("hex");
  const onFormatChange = e => {
    setFormat(e.target.value);
    handleFormatChange(e.target.value);
  };
  return (
    <Root>
      <Logo>
        <Link to="/">react / colour / picker</Link>
      </Logo>
      {!hideLevel && (
        <LevelControlsContainer>
          <span>Level: {level}</span>
          <SliderContainer>
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onChange={levelChanged}
            />
          </SliderContainer>
        </LevelControlsContainer>
      )}
      <div className="select-container">
        <FormControl size="small">
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
        </FormControl>
      </div>
    </Root>
  );
};

export default Navbar;

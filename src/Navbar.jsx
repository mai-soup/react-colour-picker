import "rc-slider/assets/index.css";
import "./Navbar.css";
import Slider from "rc-slider";

const Navbar = ({ level, levelChanged }) => {
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
    </header>
  );
};

export default Navbar;

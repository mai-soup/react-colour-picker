import "./ColourBox.css";

const ColourBox = ({ background, name }) => {
  return (
    <div style={{ background: background }} className="ColourBox">
      <span>{name} </span>
      <span>MORE</span>
    </div>
  );
};

export default ColourBox;

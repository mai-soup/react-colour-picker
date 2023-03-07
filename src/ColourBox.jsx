import "./ColourBox.css";

const ColourBox = ({ background, name }) => {
  return (
    <div style={{ background }} className="ColourBox">
      <div className="copy-container">
        <div className="box-content">
          <span>{name}</span>
        </div>
        <button className="copy-button">Copy</button>
      </div>
      <span className="see-more">MORE</span>
    </div>
  );
};

export default ColourBox;

import "./ColourBox.css";
import { CopyToClipboard } from "react-copy-to-clipboard";

const ColourBox = ({ background, name }) => {
  return (
    <div style={{ background }} className="ColourBox">
      <div className="copy-container">
        <div className="box-content">
          <span>{name}</span>
        </div>
        <CopyToClipboard text={background}>
          <button className="copy-button">Copy</button>
        </CopyToClipboard>
      </div>
      <span className="see-more">MORE</span>
    </div>
  );
};

export default ColourBox;

import { useState } from "react";
import "./ColourBox.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";

const ColourBox = ({ background, name, paletteId, colourId, single, back }) => {
  const [copied, setCopied] = useState(false);
  function changeCopyState() {
    setCopied(true);
    console.log(copied);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  }
  return (
    <div
      style={{ background }}
      className={`ColourBox ${single && "single"} ${back && "back"}`}
    >
      <div
        style={{ background }}
        className={`copy-overlay ${copied ? "show" : ""}`}
      />
      {!back ? (
        <>
          <div className={`copy-msg ${copied ? "show" : ""}`}>
            <h1>Copied!</h1>
            <p>{background}</p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span>{name}</span>
            </div>
            <CopyToClipboard
              text={background}
              onCopy={() => {
                console.log("copied!");
                changeCopyState();
              }}
            >
              <button className="copy-button">Copy</button>
            </CopyToClipboard>
          </div>
          {!single && (
            <Link to={`/palette/${paletteId}/${colourId}`}>
              <span className="see-more">MORE</span>
            </Link>
          )}
        </>
      ) : (
        <Link to={`/palette/${paletteId}/`}>
          <button className="back-button">Go back</button>
        </Link>
      )}
    </div>
  );
};

export default ColourBox;

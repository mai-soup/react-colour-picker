import { useState } from "react";
import "./ColourBox.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import chroma from "chroma-js";

const ColourBox = ({ background, name, paletteId, colourId, single, back }) => {
  const [copied, setCopied] = useState(false);
  function changeCopyState() {
    setCopied(true);
    console.log(copied);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  }
  // compare background's luminance ratio against white and black,
  // assign contrast class based on which one is larger.
  // makes text more accessible by changing colour depending on how
  // dark/light the background is.
  const wLum = chroma("#fff").luminance();
  const bLum = chroma("#000").luminance();
  const bgLuminance = chroma(background).luminance();
  const whiteLumRatio = (wLum + 0.05) / (bgLuminance + 0.05);
  const blackLumRatio = (bgLuminance + 0.05) / (bLum + 0.05);
  const contrClass = whiteLumRatio < blackLumRatio ? " bg-light" : " bg-dark";
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
            <h1 className={contrClass}>Copied!</h1>
            <p className={contrClass}>{background}</p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span className={contrClass}>{name}</span>
            </div>
            <CopyToClipboard
              text={background}
              onCopy={() => {
                console.log("copied!");
                changeCopyState();
              }}
            >
              <button className={`copy-button ${contrClass}`}>Copy</button>
            </CopyToClipboard>
          </div>
          {!single && (
            <Link to={`/palette/${paletteId}/${colourId}`}>
              <span className={`see-more ${contrClass}`}>MORE</span>
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

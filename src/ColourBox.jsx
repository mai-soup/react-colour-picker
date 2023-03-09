import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import chroma from "chroma-js";
import {
  CopyMessage,
  CopyOverlay,
  Root,
  CopyContainer,
  BoxContent,
  CopyButton,
  SeeMore,
  BackButton,
} from "./styles/ColourBox.styles";

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
  const darkBg = whiteLumRatio > blackLumRatio;
  return (
    <Root style={{ background }} single={single}>
      <CopyOverlay style={{ background }} show={copied} />
      {!back ? (
        <>
          <CopyMessage show={copied} darkMode={darkBg}>
            <h1>Copied!</h1>
            <p>{background}</p>
          </CopyMessage>
          <CopyContainer>
            <BoxContent darkMode={darkBg}>
              <span>{name}</span>
            </BoxContent>
            <CopyToClipboard
              text={background}
              onCopy={() => {
                console.log("copied!");
                changeCopyState();
              }}
            >
              <CopyButton darkMode={darkBg}>Copy</CopyButton>
            </CopyToClipboard>
          </CopyContainer>
          {!single && (
            <Link to={`/palette/${paletteId}/${colourId}`}>
              <SeeMore darkMode={darkBg}>MORE</SeeMore>
            </Link>
          )}
        </>
      ) : (
        <Link to={`/palette/${paletteId}/`}>
          <BackButton>Go back</BackButton>
        </Link>
      )}
    </Root>
  );
};

export default ColourBox;

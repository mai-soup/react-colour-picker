import { styled } from "@mui/system";
import sizes from "./sizes";

export const CopyOverlay = styled("div")(props => ({
  opacity: props.show ? 1 : 0,
  zIndex: props.show ? 10 : 0,
  width: "100%",
  height: "100%",
  transform: props.show ? "scale(50)" : "scale(0.1)",
  transition: "transform 0.6s ease-in-out",
  position: props.show ? "absolute" : "static",
}));

export const CopyMessage = styled("div")(props => ({
  position: "fixed",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  visibility: props.show ? "visible" : "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  fontSize: "4rem",
  [sizes.down("xs")]: {
    fontSize: "6rem",
  },
  color: props.darkMode ? "white" : "black",
  transform: props.show ? "scale(1)" : "scale(0.1)",
  opacity: props.show ? 1 : 0,
  zIndex: props.show ? 25 : 0,
  transition: "opacity 0.2s ease-in-out, transform 0.2s ease-in-out",
  transitionDelay: "0.4s",
  "& h1": {
    fontWeight: 400,
    textShadow: props.darkMode ? "1px 2px black" : "2px 3px white",
    background: "rgba(255, 255, 255, 0.4)",
    textTransform: "uppercase",
    width: "100%",
    textAlign: "center",
    marginBottom: 0,
    padding: "1rem",
    zIndex: 25,
  },
  "& p": {
    fontSize: "2rem",
    fontWeight: 100,
  },
}));

export const Root = styled("div")(props => ({
  width: "20%",
  height: props.single ? "50%" : "25%",
  margin: "0 auto",
  display: "inline-block",
  position: "relative",
  textTransform: "uppercase",
  marginBottom: "-4px",
  "&:hover button": {
    opacity: 1,
  },
  [sizes.down("lg")]: {
    width: "25%",
    height: props.single ? "33.33%" : "20%",
  },
  [sizes.down("md")]: {
    width: "50%",
    height: props.single ? "20%" : "10%",
  },
  [sizes.down("xs")]: {
    width: "100%",
    height: props.single ? "10%" : "5%",
  },
}));

export const CopyContainer = styled("div")({});

export const BoxContent = styled("div")(props => ({
  position: "absolute",
  padding: "10px",
  paddingRight: 0,
  width: "90%",
  left: 0,
  bottom: 0,
  color: props.darkMode ? "white" : "black",
  letterSpacing: "1px",
  fontSize: "12px",
}));

export const BackButton = styled("button")({
  width: "100px",
  height: "30px",
  position: "absolute",
  display: "inline-block",
  top: "50%",
  left: "50%",
  marginLeft: "-50px",
  marginTop: "-15px",
  textAlign: "center",
  outline: "none",
  background: "rgba(255, 255, 255, 0.3)",
  fontSize: "1rem",
  lineHeight: "30px",
  color: "white",
  border: "none",
  cursor: "pointer",
  textTransform: "uppercase",
});

export const CopyButton = styled(BackButton)(props => ({
  //`copy-button ${contrClass}`
  opacity: 0,
  color: props.darkMode ? "white" : "black",
  transition: "opacity 0.4s ease-out",
}));

export const SeeMore = styled("span")(props => ({
  // className={`see-more ${contrClass}`}
  background: "rgba(255, 255, 255, 0.3)",
  position: "absolute",
  border: "none",
  right: 0,
  bottom: 0,
  color: props.darkMode ? "white" : "black",
  width: "60px",
  height: "30px",
  textAlign: "center",
  lineHeight: "30px",
  cursor: "pointer",
}));

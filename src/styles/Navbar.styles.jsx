import { styled } from "@mui/system";
import sizes from "./sizes";

export const Root = styled("header")({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  height: "7vh",
  minHeight: "3.5rem",
});

export const Logo = styled("div")({
  marginRight: "15px",
  padding: "0 13px",
  fontSize: "1.5rem",
  [sizes.down("md")]: {
    fontSize: "1.15rem",
  },
  [sizes.down("xs")]: {
    fontSize: "1rem",
  },
  backgroundColor: "#eceff1",
  height: "100%",
  display: "flex",
  alignItems: "center",
  "& a": {
    textDecoration: "none",
    color: "black",
  },
});

export const SliderContainer = styled("div")({
  width: "340px",
  [sizes.down("sm")]: {
    width: "150px",
  },
  [sizes.down("xs")]: {
    width: "100px",
  },
  margin: "0 10px",
  display: "inline-block",
  "& .rc-slider-track": {
    backgroundColor: "green",
    height: "8px",
  },
  "& .rc-slider-rail": {
    height: "8px",
  },
  "& .rc-slider-handle, & .rc-slider-handle:active, & .rc-slider-handle:focus, & .rc-slider-handle:hover, & .rc-slider-handle-dragging.rc-slider-handle-dragging.rc-slider-handle-dragging":
    {
      backgroundColor: "green",
      outline: "none",
      opacity: 1,
      border: "2px solid green",
      boxShadow: "none",
      marginTop: "-4px",
    },
});

export const LevelControlsContainer = styled("div")({
  marginLeft: "auto",
  marginRight: "1rem",
});

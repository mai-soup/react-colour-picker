import { styled } from "@mui/system";

export const Container = styled("div")({
  backgroundColor: "white",
  borderRadius: "5px",
  padding: "0.5rem",
  position: "relative",
  "&:hover": {
    cursor: "pointer",
  },
});

export const Title = styled("h5")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: 0,
  color: "black",
  paddingTop: "0.5rem",
  fontSize: "1rem",
  position: "relative",
});

export const Emoji = styled("span")({
  marginLeft: "0.5rem",
  fontSize: "1.5rem",
});

export const ColoursContainer = styled("div")({
  height: "125px",
  width: "100%",
  backgroundColor: "#dae1e4",
  borderRadius: "5px",
  overflow: "hidden",
});

export const SingleColour = styled("div")({
  height: "25%",
  width: "20%",
  display: "inline-block",
  position: "relative",
  marginBottom: "-4px",
});

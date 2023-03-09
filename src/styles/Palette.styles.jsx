import { styled } from "@mui/system";

export const Root = styled("div")({
  height: "100vh",
  display: "flex",
  flexDirection: "column",
});

export const ColoursContainer = styled("div")({
  height: "90%",
});

export const PaletteFooter = styled("footer")({
  background: "white",
  height: "5vh",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  fontWeight: "bold",
});

export const Emoji = styled("span")({
  fontSize: "1.5rem",
  margin: "0 1rem",
});

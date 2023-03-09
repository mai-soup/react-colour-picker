import { styled } from "@mui/system";
import bg from "../images/scattered-forcefields.svg";

export const Root = styled("div")({
  backgroundColor: "#070857",
  backgroundImage: `url(${bg})`,
  backgroundAttachment: "fixed",
  backgroundSize: "cover",
  minHeight: "100vh",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
});

export const Container = styled("div")({
  width: "50%",
  display: "flex",
  alignItems: "flex-start",
  flexDirection: "column",
  flexWrap: "wrap",
});

export const Nav = styled("nav")({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  color: "white",
  alignItems: "center",
  "& a": {
    color: "white",
  },
});

export const Minis_Container = styled("div")({
  boxSizing: "border-box",
  width: "100%",
  display: "grid",
  gridTemplateColumns: "repeat(3,30%)",
  gap: "5%",
});

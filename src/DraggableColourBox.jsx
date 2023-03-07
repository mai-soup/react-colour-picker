import { styled } from "@mui/system";

const DraggableColourBox = ({ colour }) => {
  return <Root style={{ backgroundColor: colour.color }}>{colour.name}</Root>;
};

const Root = styled("div")({
  width: "20%",
  height: "25%",
  margin: "0 auto",
  display: "inline-block",
  position: "relative",
  textTransform: "uppercase",
  marginBottom: "-4px",
  cursor: "grab",
});

export default DraggableColourBox;

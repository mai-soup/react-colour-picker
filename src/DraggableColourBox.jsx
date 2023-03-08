import { styled } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";
import { SortableElement } from "react-sortable-hoc";

const DraggableColourBox = SortableElement(({ colour, deleteColour }) => {
  return (
    <Root style={{ backgroundColor: colour.color }}>
      <Content>
        <span>{colour.name}</span>
        <StyledDeleteIcon onClick={() => deleteColour(colour.name)} />
      </Content>
    </Root>
  );
});

const Root = styled("div")({
  width: "20%",
  height: "25%",
  margin: "0 auto",
  display: "inline-block",
  position: "relative",
  textTransform: "uppercase",
  marginBottom: "-4px",
  cursor: "grab",
  "&:hover svg": {
    color: "white",
    transform: "scale(1.35)",
  },
});

// TODO: change text colour depending on luminance
const Content = styled("div")({
  position: "absolute",
  padding: "10px",
  paddingRight: "0",
  width: "90%",
  left: 0,
  bottom: 0,
  color: "black",
  letterSpacing: "1px",
  fontSize: "12px",
  display: "flex",
  justifyContent: "space-between",
});

const StyledDeleteIcon = styled(DeleteIcon)({
  color: "rgba(0,0,0,0.5)",
  transition: "all 0.3s",
  cursor: "pointer",
});

export default DraggableColourBox;

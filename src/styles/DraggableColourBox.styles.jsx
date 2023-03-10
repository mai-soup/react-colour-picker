import { styled } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";

export const Root = styled("div")({
  width: "20%",
  height: "25%",
  margin: "0 auto",
  display: "inline-block",
  position: "relative",
  textTransform: "uppercase",
  marginBottom: "-8.5px",
  cursor: "grab",
  "&:hover svg": {
    color: "white",
    transform: "scale(1.35)",
  },
});

// TODO: change text colour depending on luminance
export const Content = styled("div")({
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
  userSelect: "none",
});

export const StyledDeleteIcon = styled(DeleteIcon)({
  color: "rgba(0,0,0,0.5)",
  transition: "all 0.3s",
  cursor: "pointer",
});

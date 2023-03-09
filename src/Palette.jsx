import ColourBox from "./ColourBox";
import { useState } from "react";
import Navbar from "./Navbar";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import {
  Root,
  ColoursContainer,
  PaletteFooter,
  Emoji,
} from "./styles/Palette.styles";

const Palette = ({ palette }) => {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState("hex");
  const [open, setOpen] = useState(false);
  const levelChanged = newLevel => {
    setLevel(newLevel);
  };
  const handleFormatChange = fmt => {
    setFormat(fmt);
    setOpen(true);
  };
  const closeSnackbar = () => {
    setOpen(false);
  };
  return (
    <Root>
      <Navbar {...{ level, levelChanged, handleFormatChange }} />
      <ColoursContainer>
        {palette.colors[level].map(c => (
          <ColourBox
            background={c[format]}
            name={c.name}
            key={c.id}
            paletteId={palette.id}
            colourId={c.id}
          />
        ))}
      </ColoursContainer>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        message={
          <span id="message-id">Format changed to {format.toUpperCase()}!</span>
        }
        ContentProps={{ "aria-describedby": "message-id" }}
        onClose={closeSnackbar}
        action={[
          <IconButton
            onClick={closeSnackbar}
            color="inherit"
            key="close"
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
      <PaletteFooter>
        {palette.paletteName} <Emoji>{palette.emoji}</Emoji>
      </PaletteFooter>
    </Root>
  );
};

export default Palette;

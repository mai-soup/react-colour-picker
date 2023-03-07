import ColourBox from "./ColourBox";
import "./Palette.css";
import { useState } from "react";
import Navbar from "./Navbar";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const SingleColourPalette = ({ palette }) => {
  // TODO: deal with all these states
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
    <div className="Palette">
      <Navbar {...{ handleFormatChange }} hideLevel />
      <div className="Palette-colours">
        {palette.colors.map(c => (
          <ColourBox
            background={c[format]}
            name={c.name}
            key={c.id}
            paletteId={palette.id}
            colourId={c.id}
            single
          />
        ))}
        <ColourBox background="black" paletteId={palette.id} single back />
      </div>
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
      <footer className="Palette-footer">
        {palette.paletteName} <span className="emoji">{palette.emoji}</span>
      </footer>
    </div>
  );
};

export default SingleColourPalette;

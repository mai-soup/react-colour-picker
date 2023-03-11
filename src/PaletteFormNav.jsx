import { Button, Toolbar, Typography, IconButton } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import PaletteMetaForm from "./PaletteMetaForm";
import { AppBar } from "./styles/NewPaletteForm.styles";
import { useNavigate } from "react-router-dom";

const PaletteFormNav = ({
  handleDrawerOpen,
  handlePaletteSubmission,
  open,
}) => {
  const navigate = useNavigate();
  return (
    <AppBar position="fixed" open={open} color="default">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{ mr: 2, ...(open && { display: "none" }) }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          Create a New Palette
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default PaletteFormNav;

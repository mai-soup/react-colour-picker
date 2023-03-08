import { styled, Button, Toolbar, Typography, IconButton } from "@mui/material";

import { Menu as MenuIcon } from "@mui/icons-material";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { useState } from "react";
import PaletteMetaForm from "./PaletteMetaForm";

const PaletteFormNav = ({
  handleDrawerOpen,
  handlePaletteSubmission,
  open,
  AppBar,
}) => {
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
      <NavButtons>
        <PaletteMetaForm handlePaletteSubmission={handlePaletteSubmission} />
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            navigate("/");
          }}
        >
          Go Back
        </Button>
      </NavButtons>
    </AppBar>
  );
};

const NavButtons = styled("div")({});

export default PaletteFormNav;

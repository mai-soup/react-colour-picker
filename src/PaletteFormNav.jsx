import { styled, Button, Toolbar, Typography, IconButton } from "@mui/material";

import { Menu as MenuIcon } from "@mui/icons-material";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { useState } from "react";

const PaletteFormNav = ({
  handleDrawerOpen,
  handlePaletteSubmission,
  open,
  AppBar,
}) => {
  const [currentInput, setInput] = useState("");
  const handleInput = e => {
    setInput(e.target.value);
  };
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
        <ValidatorForm
          onSubmit={() => {
            handlePaletteSubmission(currentInput);
          }}
        >
          <TextValidator
            label="Palette Name"
            value={currentInput}
            onChange={handleInput}
            validators={["required", "isPaletteNameUnique"]}
            errorMessages={["Palette name required.", "Name already in use."]}
          />
          <Button variant="contained" color="primary" type="submit">
            Save Palette
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              navigate("/");
            }}
          >
            Go Back
          </Button>
        </ValidatorForm>
      </Toolbar>
    </AppBar>
  );
};

export default PaletteFormNav;

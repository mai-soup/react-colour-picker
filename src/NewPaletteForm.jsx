import { React, useState, useEffect } from "react";
import {
  Box,
  Drawer,
  CssBaseline,
  Typography,
  IconButton,
} from "@mui/material";
import { ChevronLeft as ChevronLeftIcon } from "@mui/icons-material";

import { ValidatorForm } from "react-material-ui-form-validator";
import seedColours from "./seedColours";

import DraggableColourList from "./DraggableColourList";
import { useNavigate } from "react-router-dom";
import { arrayMove } from "react-sortable-hoc";
import PaletteFormNav from "./PaletteFormNav";
import ColourPickerForm from "./ColourPickerForm";
import { DRAWER_WIDTH } from "./constants";
import {
  Main,
  DrawerHeader,
  Container,
  ButtonsContainer,
  StyledButton,
} from "./styles/NewPaletteForm.styles";

const NewPaletteForm = ({ savePalette, palettes, maxColours = 20 }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const [currentColour, setColour] = useState("#008080");
  const [colours, updateColours] = useState(seedColours[0].colors);
  const [currentName, setName] = useState("");
  const [newPaletteName, setNewPaletteName] = useState("");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleColorChange = newColor => {
    setColour(newColor.hex);
  };

  const addNewColour = () => {
    const newColour = { color: currentColour, name: currentName };
    updateColours(c => [...c, newColour]);
    setName("");
  };

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handlePaletteNameChange = e => {
    setNewPaletteName(e.target.value);
  };

  const handlePaletteSubmission = (newName, emoji) => {
    const newPalette = {
      paletteName: newName,
      colors: colours,
      id: newName.toLowerCase().replace(/\s/g, "-"),
      emoji,
    };
    savePalette(newPalette);
    navigate("/");
  };

  const handleDeleteColour = name => {
    updateColours(colours.filter(c => c.name !== name));
  };

  const onSortEnd = ({ oldIndex, newIndex }) => {
    updateColours(arrayMove(colours, oldIndex, newIndex));
  };

  const clearColours = () => {
    updateColours([]);
  };

  const addRandomColour = () => {
    // picks a rand colour from an existing palette
    const allColors =
      palettes.length > 0
        ? palettes.map(p => p.colors).flat()
        : seedColours.map(p => p.colors).flat();

    let randomColor;
    let isDuplicate = false;
    do {
      randomColor = allColors[Math.floor(Math.random() * allColors.length)];
      isDuplicate = colors.some(
        c => c.name === randomColor.name || c.hex === randomColor.hex
      );
    } while (isDuplicate);

    updateColours([...colours, randomColor]);
  };

  ValidatorForm.addValidationRule("isNameUnique", value =>
    colours.every(({ name }) => name.toLowerCase() !== value.toLowerCase())
  );
  ValidatorForm.addValidationRule("isColourUnique", value =>
    colours.every(c => c.color !== currentColour)
  );
  ValidatorForm.addValidationRule("isPaletteNameUnique", value =>
    palettes.every(
      ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
    )
  );

  useEffect(() => {
    return () => {
      ValidatorForm.removeValidationRule("isNameUnique");
      ValidatorForm.removeValidationRule("isColourUnique");
      ValidatorForm.removeValidationRule("isPaletteNameUnique");
    };
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <PaletteFormNav
        handleDrawerOpen={handleDrawerOpen}
        handlePaletteNameChange={handlePaletteNameChange}
        handlePaletteSubmission={handlePaletteSubmission}
        newPaletteName={newPaletteName}
        drawerWidth={DRAWER_WIDTH}
        open={open}
      />
      <Drawer
        sx={{
          width: DRAWER_WIDTH,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: DRAWER_WIDTH,
            boxSizing: "border-box",
            display: "flex",
            alignItems: "center",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Container>
          <Typography variant="h4" gutterBottom>
            Design Your Palette
          </Typography>
          <ButtonsContainer>
            <StyledButton
              variant="contained"
              color="secondary"
              onClick={clearColours}
            >
              Clear palette
            </StyledButton>
            <StyledButton
              StyledButton="contained"
              color="primary"
              disabled={colours.length >= maxColours}
              onClick={addRandomColour}
              sx={{ backgroundColor: "#1976d2", color: "white" }}
            >
              Random colour
            </StyledButton>
          </ButtonsContainer>
          <ColourPickerForm
            {...{
              colours,
              currentColour,
              handleColorChange,
              addNewColour,
              currentName,
              handleNameChange,
              maxColours,
            }}
          />
        </Container>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <DraggableColourList
          colours={colours}
          handleDeleteColour={handleDeleteColour}
          axis="xy"
          onSortEnd={onSortEnd}
          distance={10}
        />
      </Main>
    </Box>
  );
};

export default NewPaletteForm;

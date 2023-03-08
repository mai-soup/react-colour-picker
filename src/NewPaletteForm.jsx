import { React, useState, useEffect } from "react";
import {
  styled,
  Box,
  Button,
  Drawer,
  AppBar as MuiAppBar,
  CssBaseline,
  Typography,
  IconButton,
} from "@mui/material";
import { ChevronLeft as ChevronLeftIcon } from "@mui/icons-material";

import { ValidatorForm } from "react-material-ui-form-validator";

import DraggableColourList from "./DraggableColourList";
import { useNavigate } from "react-router-dom";
import { arrayMove } from "react-sortable-hoc";
import PaletteFormNav from "./PaletteFormNav";
import ColourPickerForm from "./ColourPickerForm";

const drawerWidth = 375;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  flexDirection: "row",
  justifyContent: "space-between",
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Main = styled("main", { shouldForwardProp: prop => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    height: "calc(100vh - 64px)",
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const NewPaletteForm = ({ savePalette, palettes, maxColours = 20 }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const [currentColour, setColour] = useState("#008080");
  const [colours, updateColours] = useState(palettes[0].colors);
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

  const handlePaletteSubmission = newName => {
    const newPalette = {
      paletteName: newName,
      colors: colours,
      id: newName.toLowerCase().replace(/\s/g, "-"),
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
    const allColors = palettes.map(p => p.colors).flat();
    var i = Math.floor(Math.random() * allColors.length);
    // TODO: make sure cant add duplicates either by colour or name
    const randomColor = allColors[i];
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
        drawerWidth={drawerWidth}
        open={open}
        AppBar={AppBar}
      />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
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
        />
      </Main>
    </Box>
  );
};

const Container = styled("div")({
  width: "90%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
});

const ButtonsContainer = styled("div")({ width: "100%" });

const StyledButton = styled(Button)({ width: "50%" });

export default NewPaletteForm;

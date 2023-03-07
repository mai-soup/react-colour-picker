import { React, useState, useEffect } from "react";
import {
  styled,
  Box,
  Button,
  Drawer,
  CssBaseline,
  AppBar as MuiAppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  colors,
} from "@mui/material";

import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
} from "@mui/icons-material";

import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

import { ChromePicker } from "react-color";
import DraggableColourBox from "./DraggableColourBox";
import { useNavigate } from "react-router-dom";

const drawerWidth = 330;

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

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const NewPaletteForm = ({ savePalette, palettes }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const [currentColour, setColour] = useState("#008080");
  const [colours, updateColours] = useState([
    { color: "#2DAC36", name: "gren" },
    { color: "#F21498", name: "pink" },
  ]);
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

  const handlePaletteSubmission = () => {
    const newName = newPaletteName;
    const newPalette = {
      paletteName: newName,
      colors: colours,
      id: newName.toLowerCase().replace(/\s/g, "-"),
    };
    savePalette(newPalette);
    navigate("/");
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
          <ValidatorForm onSubmit={handlePaletteSubmission}>
            <TextValidator
              label="Palette Name"
              value={newPaletteName}
              onChange={handlePaletteNameChange}
              validators={["required", "isPaletteNameUnique"]}
              errorMessages={["Palette name required.", "Name already in use."]}
            />
            <Button variant="contained" color="primary" type="submit">
              Save Palette
            </Button>
          </ValidatorForm>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
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
        <Typography variant="h4">Design Your Palette</Typography>
        <div>
          <Button variant="contained" color="secondary">
            Clear palette
          </Button>
          <Button variant="contained" color="primary">
            Random colour
          </Button>
        </div>
        <ChromePicker
          color={currentColour}
          onChangeComplete={newCol => {
            handleColorChange(newCol);
          }}
        />
        <ValidatorForm onSubmit={addNewColour}>
          <TextValidator
            label="Colour Name"
            value={currentName}
            onChange={handleNameChange}
            validators={["required", "isNameUnique", "isColourUnique"]}
            errorMessages={[
              "Name is required.",
              "Colour names must be unique across the palette.",
              "Colour already exists inside palette.",
            ]}
          />
          <Button
            variant="contained"
            color="primary"
            style={{ backgroundColor: currentColour }}
            type="submit"
          >
            Add Colour
          </Button>
        </ValidatorForm>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {colours.map((c, i) => (
          <DraggableColourBox key={i} colour={c} />
        ))}
      </Main>
    </Box>
  );
};

export default NewPaletteForm;

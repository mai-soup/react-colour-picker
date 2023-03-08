import { React } from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/system";

import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

import { ChromePicker } from "react-color";

const ColourPickerForm = ({
  colours,
  currentColour,
  handleColorChange,
  addNewColour,
  currentName,
  handleNameChange,
  maxColours,
}) => {
  return (
    <Root>
      <StyledChromePicker
        color={currentColour}
        onChangeComplete={newCol => {
          handleColorChange(newCol);
        }}
      />
      <ValidatorForm onSubmit={addNewColour}>
        <StyledInput
          label="Colour Name"
          value={currentName}
          onChange={handleNameChange}
          disabled={colours.length >= maxColours}
          variant="filled"
          margin="normal"
          validators={["required", "isNameUnique", "isColourUnique"]}
          errorMessages={[
            "Name is required.",
            "Colour names must be unique across the palette.",
            "Colour already exists inside palette.",
          ]}
        />
        <AddColourButton
          variant="contained"
          color="primary"
          style={{
            backgroundColor:
              colours.length >= maxColours ? "grey" : currentColour,
          }}
          disabled={colours.length >= maxColours}
          type="submit"
        >
          Add Colour
        </AddColourButton>
      </ValidatorForm>
    </Root>
  );
};

const Root = styled("div")({});

const StyledChromePicker = styled(ChromePicker)({
  width: "100% !important",
  marginTop: "2rem",
});

const AddColourButton = styled(Button)({
  width: "100%",
  padding: "1rem",
  marginTop: "1rem",
  fontSize: "2rem",
});

const StyledInput = styled(TextValidator)({
  width: "100%",
  height: "70px",
});

export default ColourPickerForm;

import { React } from "react";
import { ValidatorForm } from "react-material-ui-form-validator";
import {
  Root,
  StyledChromePicker,
  StyledInput,
  AddColourButton,
} from "./styles/ColourPickerForm.styles";
import PaletteMetaForm from "./PaletteMetaForm";

const ColourPickerForm = ({
  colours,
  currentColour,
  handleColorChange,
  addNewColour,
  currentName,
  handleNameChange,
  maxColours,
  handlePaletteSubmission,
}) => {
  return (
    <Root>
      <StyledChromePicker
        color={currentColour}
        onChangeComplete={newCol => {
          handleColorChange(newCol);
        }}
      />
      <ValidatorForm onSubmit={addNewColour} instantValidate={false}>
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
          margin="normal"
          style={{
            backgroundColor:
              colours.length >= maxColours ? "grey" : currentColour,
          }}
          disabled={colours.length >= maxColours}
          type="submit"
        >
          {colours.length >= maxColours ? "Palette Full" : "Add Colour"}
        </AddColourButton>
      </ValidatorForm>
      <PaletteMetaForm handlePaletteSubmission={handlePaletteSubmission} />
    </Root>
  );
};

export default ColourPickerForm;

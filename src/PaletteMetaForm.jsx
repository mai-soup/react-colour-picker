import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { React, useState } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

const STATE_FORM_OPEN = 345;
const STATE_EMOJIS_OPEN = 346;
const STATE_CLOSED = 347;

const PaletteMetaForm = ({ handlePaletteSubmission }) => {
  // TODO: style the dialog
  const [open, setOpen] = useState(STATE_CLOSED);
  const [currentInput, setInput] = useState("");
  const handleInput = e => {
    setInput(e.target.value);
  };

  const handleClickOpen = () => {
    setOpen(STATE_FORM_OPEN);
  };

  const handleClose = () => {
    setOpen(STATE_CLOSED);
  };

  const handleNamePicked = () => {
    setOpen(STATE_EMOJIS_OPEN);
  };

  const handleEmojiSelect = emoji => {
    setOpen(STATE_CLOSED);
    handlePaletteSubmission(currentInput, emoji.native);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Save Palette
      </Button>
      <Dialog open={open === STATE_FORM_OPEN} onClose={handleClose}>
        <DialogTitle>Enter Palette Name</DialogTitle>
        <ValidatorForm onSubmit={handleNamePicked}>
          <DialogContent>
            <TextValidator
              label="Name"
              value={currentInput}
              onChange={handleInput}
              validators={["required", "isPaletteNameUnique"]}
              errorMessages={["Palette name required.", "Name already in use."]}
            />
          </DialogContent>
          <DialogActions>
            <Button type="button" onClick={handleClose}>
              Cancel
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </DialogActions>
        </ValidatorForm>
      </Dialog>
      <Dialog open={open === STATE_EMOJIS_OPEN} onClose={handleClose}>
        <DialogTitle>Choose an emoji</DialogTitle>
        <DialogContent>
          <Picker data={data} onEmojiSelect={handleEmojiSelect} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default PaletteMetaForm;

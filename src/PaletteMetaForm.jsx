import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { React, useState } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

const PaletteMetaForm = ({ handlePaletteSubmission }) => {
  // TODO: style the dialog
  const [open, setOpen] = useState(false);
  const [currentInput, setInput] = useState("");
  const handleInput = e => {
    setInput(e.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="secondary"
        onClick={handleClickOpen}
        sx={{ backgroundColor: "#1976d2", color: "white" }}
      >
        Save Palette
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Enter Palette Name</DialogTitle>
        <DialogContent>
          <ValidatorForm
            onSubmit={() => {
              handlePaletteSubmission(currentInput);
            }}
          >
            <TextValidator
              label="Name"
              value={currentInput}
              onChange={handleInput}
              validators={["required", "isPaletteNameUnique"]}
              errorMessages={["Palette name required.", "Name already in use."]}
            />
            <Button variant="contained" color="primary" type="submit">
              Save Palette
            </Button>
          </ValidatorForm>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default PaletteMetaForm;

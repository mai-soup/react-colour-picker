import { Button } from "@mui/material";
import { styled } from "@mui/system";

import { TextValidator } from "react-material-ui-form-validator";

import { ChromePicker } from "react-color";

export const Root = styled("div")({});

export const StyledChromePicker = styled(ChromePicker)({
  width: "100% !important",
  marginTop: "2rem",
});

export const AddColourButton = styled(Button)({
  width: "100%",
  padding: "1rem",
  marginTop: "1rem",
  fontSize: "2rem",
});

export const StyledInput = styled(TextValidator)({
  width: "100%",
  height: "70px",
});

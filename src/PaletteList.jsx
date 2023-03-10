import MiniPalette from "./MiniPalette";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Root,
  Container,
  Nav,
  Minis_Container,
} from "./styles/PaletteList.styles";
import {
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@mui/material";
import { Check as CheckIcon, Close as CloseIcon } from "@mui/icons-material";
import { blue, red } from "@mui/material/colors";
import { useState } from "react";

const PaletteList = ({ palettes, handleDelete }) => {
  const navigate = useNavigate();
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [delId, setDelId] = useState("");

  function openPalette(id) {
    console.log(id);
    navigate(`/palette/${id}`);
  }

  const openDialog = id => {
    setDialogOpen(true);
    setDelId(id);
  };

  const closeDialog = () => {
    setDialogOpen(false);
    setDelId("");
  };

  return (
    <Root>
      <Container>
        <Nav>
          <h1>react / colour / picker</h1>
          <Link to="/palette/new">Create new</Link>
        </Nav>
        <Minis_Container>
          {palettes.map(p => (
            <MiniPalette
              {...p}
              handleClick={() => openPalette(p.id)}
              key={p.paletteName}
              handleDelete={openDialog}
            />
          ))}
        </Minis_Container>
      </Container>
      <Dialog
        open={isDialogOpen}
        aria-labelledby="delete-dialog-title"
        onClose={closeDialog}
      >
        <DialogTitle id="delete-dialog-title">Delete This Palette?</DialogTitle>
        <List>
          <ListItem
            button
            onClick={() => {
              closeDialog();
              handleDelete(delId);
            }}
          >
            <ListItemAvatar>
              <Avatar style={{ backgroundColor: blue[100], color: blue[600] }}>
                <CheckIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Delete" />
          </ListItem>
          <ListItem button onClick={closeDialog}>
            <ListItemAvatar>
              <Avatar style={{ backgroundColor: red[100], color: red[600] }}>
                <CloseIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Cancel" />
          </ListItem>
        </List>
      </Dialog>
    </Root>
  );
};

export default PaletteList;

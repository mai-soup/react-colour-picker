import MiniPalette from "./MiniPalette";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Root,
  Container,
  Nav,
  Minis_Container,
} from "./styles/PaletteList.styles";

const PaletteList = ({ palettes, handleDelete }) => {
  const navigate = useNavigate();

  function openPalette(id) {
    console.log(id);
    navigate(`/palette/${id}`);
  }

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
              handleDelete={handleDelete}
            />
          ))}
        </Minis_Container>
      </Container>
    </Root>
  );
};

export default PaletteList;

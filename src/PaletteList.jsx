import { styled } from "@mui/system";
import MiniPalette from "./MiniPalette";
import { useNavigate } from "react-router-dom";

const PaletteList = ({ palettes, history }) => {
  const navigate = useNavigate();

  function openPalette(id) {
    console.log(id);
    navigate(`/palette/${id}`);
  }

  return (
    <Root>
      <Container>
        <Nav>
          <h1>Colours woooo</h1>
        </Nav>
        <Minis_Container>
          {palettes.map(p => (
            <MiniPalette
              {...p}
              handleClick={() => openPalette(p.id)}
              key={p.paletteName}
            />
          ))}
        </Minis_Container>
      </Container>
    </Root>
  );
};

const Root = styled("div")({
  background: "blue",
  height: "100vh",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
});

const Container = styled("div")({
  width: "50%",
  display: "flex",
  alignItems: "flex-start",
  flexDirection: "column",
  flexWrap: "wrap",
});

const Nav = styled("nav")({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  color: "white",
});

const Minis_Container = styled("div")({
  boxSizing: "border-box",
  width: "100%",
  display: "grid",
  gridTemplateColumns: "repeat(3,30%)",
  gap: "5%",
});

export default PaletteList;

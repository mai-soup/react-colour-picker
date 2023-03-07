import { styled } from "@mui/system";

const Container = styled("div")({
  backgroundColor: "white",
  borderRadius: "5px",
  padding: "0.5rem",
  position: "relative",
  overflow: "hidden",
  "&:hover": {
    cursor: "pointer",
  },
});

const Title = styled("h5")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: 0,
  color: "black",
  paddingTop: "0.5rem",
  fontSize: "1rem",
  position: "relative",
});

const Emoji = styled("span")({
  marginLeft: "0.5rem",
  fontSize: "1.5rem",
});

const MiniPalette = ({ colors, emoji, id, paletteName }) => {
  return (
    <Container>
      <div></div>
      <Title>
        {paletteName} <Emoji>{emoji}</Emoji>
      </Title>
    </Container>
  );
};

export default MiniPalette;

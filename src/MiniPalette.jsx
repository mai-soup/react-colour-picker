import {
  Container,
  ColoursContainer,
  SingleColour,
  Title,
  Emoji,
} from "./styles/MiniPalette.styles";

const MiniPalette = ({ colors, emoji, id, paletteName, handleClick }) => {
  return (
    <Container onClick={handleClick}>
      <ColoursContainer>
        {colors.map(c => (
          <SingleColour
            style={{ backgroundColor: c.color }}
            key={c.name}
          ></SingleColour>
        ))}
      </ColoursContainer>
      <Title>
        {paletteName} <Emoji>{emoji}</Emoji>
      </Title>
    </Container>
  );
};

export default MiniPalette;

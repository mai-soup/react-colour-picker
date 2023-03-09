import {
  Container,
  ColoursContainer,
  SingleColour,
  Title,
  Emoji,
  DeleteIcon,
} from "./styles/MiniPalette.styles";

const MiniPalette = ({
  colors,
  emoji,
  id,
  paletteName,
  handleClick,
  handleDelete,
}) => {
  return (
    <Container onClick={handleClick}>
      <DeleteIcon
        onClick={e => {
          e.stopPropagation(), handleDelete(id);
        }}
      />
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

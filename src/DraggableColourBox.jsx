import { SortableElement } from "react-sortable-hoc";
import {
  Root,
  Content,
  StyledDeleteIcon,
} from "./styles/DraggableColourBox.styles";

const DraggableColourBox = SortableElement(({ colour, deleteColour }) => {
  return (
    <Root style={{ backgroundColor: colour.color }}>
      <Content>
        <span>{colour.name}</span>
        <StyledDeleteIcon onClick={() => deleteColour(colour.name)} />
      </Content>
    </Root>
  );
});

export default DraggableColourBox;

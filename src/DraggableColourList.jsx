import { SortableContainer } from "react-sortable-hoc";
import DraggableColourBox from "./DraggableColourBox";
import { Root } from "./styles/DraggableColourList.styles";

const DraggableColourList = SortableContainer(
  ({ colours, handleDeleteColour }) => {
    return (
      <Root>
        {colours.map((c, i) => (
          <DraggableColourBox
            key={c.name}
            colour={c}
            deleteColour={handleDeleteColour}
            index={i}
          />
        ))}
      </Root>
    );
  }
);

export default DraggableColourList;

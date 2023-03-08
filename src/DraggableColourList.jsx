import { SortableContainer } from "react-sortable-hoc";
import DraggableColourBox from "./DraggableColourBox";
import { styled } from "@mui/system";

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

const Root = styled("div")({ height: "100%" });

export default DraggableColourList;

import ColourBox from "./ColourBox";
import "./Palette.css";

const Palette = ({ colors }) => {
  return (
    <div className="Palette">
      {/* TODO: navbar */}
      <div className="Palette-colours">
        {colors.map(c => (
          <ColourBox background={c.color} name={c.name} />
        ))}
      </div>
      {/* TODO: footer */}
    </div>
  );
};

export default Palette;

import chroma from "chroma-js";

const levels = [50, 100, 200, 300, 500, 600, 700, 800, 900];

const generatePalette = starterPalette => {
  let newPalette = { ...starterPalette, colors: [] };

  for (let level of levels) {
    newPalette.colors[level] = [];
  }

  for (let color of starterPalette.colors) {
    const scale = generateScale(color.color, levels.length).reverse();

    for (let i in scale) {
      newPalette.colors[levels[i]].push({
        name: `${color.name} ${levels[i]}`,
        id: color.name.toLowerCase().replace(/\s/g, "-"),
        hex: scale[i],
        rgb: chroma(scale[i]).css(),
        rgba: chroma(scale[i])
          .css()
          .replace("rgb", "rgba")
          .replace(")", ",1.0)"),
      });
    }
  }

  return newPalette;
};

const getRange = hexColour => {
  return [chroma(hexColour).darken(1.4).hex(), hexColour, "#fff"];
};
const generateScale = (hexColour, numColours) =>
  chroma.scale(getRange(hexColour)).mode("lab").colors(numColours);

export default generatePalette;

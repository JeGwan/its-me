import { hexToRgb } from "@lib/utils";

const primary = "#0050FF";
const primaryAlpha = `rgb(${hexToRgb(primary).join(" ")} / 20%)`;
const styleVariables = {
  media: {
    mobile: 800,
  },
  assets: {
    close: "/assets/close.svg",
    picture: "/assets/picture.svg",
  },
  ui: {
    defaultHeight: 42,
    defaultPadding: 16,
  },
  colors: {
    lightest: "#BFDDFF",
    lighter: "#80AFFF",
    light: "#407EFF",
    primary,
    primaryAlpha,
    dark: "#0040C4",
    darker: "#003388",
    darkest: "#00234D",
    grey1: "#1B1B1B",
    grey2: "#404040",
    grey3: "#646464",
    grey4: "#888",
    grey5: "#A8A8A8",
    grey6: "#C8C8C8", // border, placeholder color
    grey7: "#E7E7E7",
  },
};

export default styleVariables;

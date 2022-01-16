import type { Theme } from "theme-ui";

import preset from "@theme-ui/preset-bootstrap";

export const theme: Theme = {
  ...preset,
  colors: {
    ...preset.colors,
    primary: "green",
  },
  styles: {
    ...preset.styles,
  },
  sizes: {
    ...preset.sizes,
    container: ["100%", 768],
  },
};

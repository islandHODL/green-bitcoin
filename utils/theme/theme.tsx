import type { Theme } from "theme-ui";
import merge from "lodash/merge";

import preset from "@theme-ui/preset-bootstrap";

export const theme: Theme = merge(preset, {
  colors: {
    primary: "green",
  },
  // styles: {
  //   ...preset.styles,
  // },
  sizes: {
    // ...preset.sizes,
    container: ["100%", 768],
  },
});

import { COLORS, FONT_FAMILY } from "../theme/constants";

/* This function is supposed to ensure a typecheck for the css variables in the constants */
export function cVar(key: keyof typeof COLORS | keyof typeof FONT_FAMILY) {
  if (key in COLORS) return `var(${COLORS[key]})`;
  if (key in FONT_FAMILY) return `var(${FONT_FAMILY[key]})`;
}

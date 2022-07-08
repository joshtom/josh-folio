/**
 * @param maxWidth max width of media query
 * @param minWidth max width of media query
 */

const customMediaQuery = (minWidth: number, maxWidth: number) =>
  `@media only screen and (min-width: ${minWidth}px)  and  (max-width: ${maxWidth}px)`;
const extraMediaQuery = (minWidth: number) =>
  `@media only screen and (max-width: ${minWidth}px)`;

interface Media {
  custom: (minWidth: number, maxWidth: number) => string;
  mobile: string;
  tablet: string;
  smallLaptop: string;
  largeLaptop: string;
  extraLargeLaptop: string;
}

/**
 * Mobile devices
 * iPads, Tablets
 * fairly large displays like small laptops
 * large laptops
 * extra large laptops
 */

const media: Media = {
  custom: customMediaQuery,
  mobile: customMediaQuery(250, 480),
  tablet: customMediaQuery(481, 768),
  smallLaptop: customMediaQuery(769, 1024),
  largeLaptop: customMediaQuery(1025, 1200),
  extraLargeLaptop: extraMediaQuery(1201),
};

/**
 *
 * @param val  size as number(unitless)
 */

const customFontSize = (val: number) => `${val}rem`;
const customRadius = (val: number) => `${val}px`;
const customSpacing = (val: number) => `${val}px`;
const customBorder = (pixel: string, color: string) =>
  `${pixel} solid ${color}`;
const circleBorder = () => `50%`;
const doubleSpacing = (verVal: number, horVal: number) =>
  `${verVal}px ${horVal}px`;
const allSidesSpacing = (
  top: number,
  right: number,
  bottom: number,
  left: number
) => `${top}px ${right}px ${bottom}px ${left}px`;

const letterSpacing = (space: string = "0.08") => `${space}em`;

const fontSize = {
  custom: customFontSize,
  small: customFontSize(0.7),
  normal: customFontSize(1),
  heading: customFontSize(1.5),
  hero: customFontSize(2.5),
  navlink: customFontSize(0.4),
};

const spacing = {
  normal: customSpacing(5),
  medium: customSpacing(10),
  large: customSpacing(25),
  double: doubleSpacing,
  custom: customSpacing,
  allSides: allSidesSpacing,
};

const borderRadius = {
  default: "5px",
  primary: "10px",
  custom: customRadius,
  round: circleBorder,
};

const border = {
  custom: customBorder,
  default: "1px solid rgba(0, 0, 0, 0.18)",
};

const transition = {
  default: "transition: 0.5s cubic-bezier(0.76, 0, 0.24, 1)",
  link: "transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);",
};

export {
  media,
  fontSize,
  borderRadius,
  spacing,
  letterSpacing,
  border,
  transition,
};

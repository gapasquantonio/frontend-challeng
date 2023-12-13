// Theme specification for styled-system

// see https://theme-ui.com/theme-spec/
// and https://github.com/system-ui/theme-specification/issues/8#issuecomment-582705042
import {
  BackgroundProps,
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TypographyProps,
  background,
  border,
  color,
  compose,
  flexbox,
  layout,
  position,
  shadow,
  space,
  typography,
} from "styled-system";

const StyledSystemStyles = compose(
  background,
  border,
  color,
  flexbox,
  layout,
  position,
  shadow,
  typography,
  space
);

type StyledSystemPropsDef = BackgroundProps &
  BorderProps &
  ColorProps &
  FlexboxProps &
  LayoutProps &
  PositionProps &
  ShadowProps &
  SpaceProps &
  TypographyProps;

const fontWeights = {
  light: 200,
  small: 300,
  regular: 400,
  normal: 500,
  semibold: 600,
  bold: 700,
};
const fontSizes = [
  "10px", // smallest 0
  "14px", // smaller 1
  "16px", // small 2
  "18px", // medium 3
  "20px", // large 4
  "24px", // larger 5
  "28px", // largest 6
];
const lineHeights = [
  "100%", // 0
  "19px", // 1
  "20px", // 2
  "22px", // 3
  "25px", // 4
  "normal", // 5
];
const spaces = [
  "0px", // 0
  "4px", // 1
  "8px", // 2
  "12px", // 3
  "16px", // 4
  "20px", // 5
  "24px", // 6
  "28px", // 7
  "32px", // 8
  "36px", // 9
  "40px", // 10
];
const borders = ["1px", "2px", "3px", "4px"];

const breakpoints = ["576px", "768px", "1024px", "1280px"];

const mediaQueries = {
  small: `@media (min-width: ${breakpoints[0]})`, // 576px
  medium: `@media (min-width: ${breakpoints[1]})`, // 768px
  large: `@media (min-width: ${breakpoints[2]})`, // 1024px
  extralarge: `@media (min-width: ${breakpoints[3]})`, // 1280px
};

const colors = {
  secondary: "#464646",
  main: "#121212",
  white: "#FFFFFF",
  gray: "#8A94A4",
  brown: "#4F372F",
  backgroundDefault: "#F8F9FA",
  inactive: "#5F5F5F5F",
};

export enum Scale {
  small = "small",
  medium = "medium",
  large = "large",
  xlarge = "xlarge",
}

const theme = {
  breakpoints,
  mediaQueries,
  fontWeights,
  fontSizes,
  lineHeights,
  space: spaces,
  borders,
  scale: Scale,
  colors,
};

// This is a way of getting around the isolated modules flag that is set by default.
export type StyledSystemProps = StyledSystemPropsDef;

export { StyledSystemStyles, theme };

export default theme;

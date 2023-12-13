import {
  color,
  compose,
  flexbox,
  layout,
  position,
  space,
  system,
  typography,
  variant,
} from "styled-system";
import theme from "../../theme";
import styled from "@emotion/styled";

interface StyledTextProps {
  variant: string;
}
const StyledText = styled.span<StyledTextProps>`
  ${variant({
    variants: {
      navbarMenu: {
        fontSize: theme.fontSizes[4],
        fontWeight: theme.fontWeights.regular,
        fontFamily: "Roboto",
        lineHeight: theme.lineHeights[5],
      },
      title: {
        fontSize: theme.fontSizes[5],
        fontWeight: theme.fontWeights.bold,
        fontFamily: "Roboto",
        lineHeight: theme.lineHeights[5],
      },
      cartTitle: {
        fontSize: theme.fontSizes[5],
        fontWeight: theme.fontWeights.small,
        fontFamily: "SF Pro Display",
        lineHeight: theme.lineHeights[5],
      },
      subtitle: {
        fontSize: theme.fontSizes[2],
        fontWeight: theme.fontWeights.bold,
        fontFamily: "Roboto",
        lineHeight: theme.lineHeights[5],
      },
      button: {
        fontSize: theme.fontSizes[3],
        fontWeight: theme.fontWeights.normal,
        fontFamily: "Roboto",
        lineHeight: theme.lineHeights[5],
      },
      h1: {
        fontSize: theme.fontSizes[5],
        fontWeight: theme.fontWeights.semibold,
        fontFamily: "Roboto",
        lineHeight: theme.lineHeights[5],
      },
      h2: {
        fontSize: theme.fontSizes[5],
        fontWeight: theme.fontWeights.normal,
        fontFamily: "Roboto",
        lineHeight: theme.lineHeights[5],
      },
      h3: {
        fontSize: theme.fontSizes[2],
        fontWeight: theme.fontWeights.normal,
        fontFamily: "Roboto",
        lineHeight: theme.lineHeights[5],
      },
      h4: {
        fontSize: theme.fontSizes[2],
        fontWeight: theme.fontWeights.regular,
        fontFamily: "Roboto",
        lineHeight: theme.lineHeights[5],
      },
      h5: {
        fontSize: theme.fontSizes[2],
        fontWeight: theme.fontWeights.semibold,
        fontFamily: "Roboto",
        lineHeight: theme.lineHeights[5],
      },
      body: {
        fontSize: theme.fontSizes[2],
        fontWeight: theme.fontWeights.small,
        fontFamily: "Roboto",
        lineHeight: theme.lineHeights[5],
      },
      chip: {
        fontSize: theme.fontSizes[1],
        fontWeight: theme.fontWeights.normal,
        fontFamily: "Roboto",
        lineHeight: theme.lineHeights[5],
      },
    },
  })}
  ${compose(space, layout, typography, color, flexbox, position)}
  ${system({ cursor: true, wordBreak: true, wordWrap: true })}
`;

export default StyledText;

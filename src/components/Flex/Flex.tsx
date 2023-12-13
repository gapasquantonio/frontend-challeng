import styled from "@emotion/styled";
import React from "react";
import {
  RequiredTheme,
  ResponsiveValue,
  system,
  Theme,
  ThemeValue,
} from "styled-system";
import theme, {
  StyledSystemProps,
  StyledSystemStyles,
} from "../../theme/theme";

// defines the gap prop types
interface GapProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = ThemeValue<"space", ThemeType>
> {
  gap?: ResponsiveValue<TVal, ThemeType>;
  rowGap?: ResponsiveValue<TVal, ThemeType>;
  columnGap?: ResponsiveValue<TVal, ThemeType>;
}

// defaults when a value isn't used
const defaults = { space: theme.space };

// append the gap properties to flex box with the default for styled-system
const Flex = styled.div<StyledSystemProps & GapProps>(
  { display: "flex" },
  StyledSystemStyles,
  system({
    gap: { property: "gap", scale: "space", defaultScale: defaults.space },
    rowGap: {
      property: "rowGap",
      scale: "space",
      defaultScale: defaults.space,
    },
    columnGap: {
      property: "columnGap",
      scale: "space",
      defaultScale: defaults.space,
    },
  })
);

export default React.memo(Flex);

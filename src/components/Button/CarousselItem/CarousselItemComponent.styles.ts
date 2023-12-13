import { css } from "@emotion/react";
import theme from "../../../theme";

const carousselItemBadge = (selected: boolean) =>
  css(`
border-radius: 50%;
width: fit-content;
max-width:74px;
height: 74px;
border:${selected ? `2px solid ${theme.colors.brown}` : "2px"};
padding: 4px;
`);

const carousselText = (selected: boolean) =>
  css(`
  color:  ${theme.colors.main};
  text-align: center;
  font-feature-settings: 'clig' off, 'liga' off;
  font-weight: ${selected ? "600" : "400"};
  border-bottom: ${selected ? "2px solid" : ""};

`);

export default {
  carousselItemBadge,
  carousselText,
};

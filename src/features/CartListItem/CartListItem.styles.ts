import { css } from "@emotion/react";
import theme from "../../theme";

const cardListitemContainer = css`
  padding: 8px 16px;
  align-items: flex-start;
  align-self: stretch;
  border-bottom: 1px solid var(--background-subtle, #eee);
  background: ${theme.colors.white};
  justify-content: space-between;
`;
const cardListitemDescription = css`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
const cardListitemSumContainer = css`
  padding: 8px;
  justifycontent: space-around;
  alignitems: center;
  maxwidth: 90px;
`;
const cardListitemCurrency = css`
  text-align: right;
  font-feature-settings: "clig" off, "liga" off;
  letter-spacing: 0.5px;
  min-width: 80px;
  justify-content: end;
`;
export default {
  cardListitemContainer,
  cardListitemDescription,
  cardListitemSumContainer,
  cardListitemCurrency,
};

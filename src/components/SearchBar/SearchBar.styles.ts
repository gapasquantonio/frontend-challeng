import { css } from "@emotion/react";
import styled from "@emotion/styled";
import theme from "../../theme";

export const SearchBarInput = styled.input`
  padding: 13px 12px 11px 0px;
  align-items: flex-start;
  flex: 1 0 0;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  border: none;
  background: white;
  border-right: 1px solid #8a94a4;
  border-radius: 8px;
`;

const searchBarContainer = (isMobile: boolean) => css`
  border-radius: 8px;
  border: 1px solid ${theme.colors.gray};
  border-right: none;
  background: white;
  width: calc(100% - 80px);
  max-width: 1024px;
  height: 44px;
  margin-top: ${isMobile ? "16px" : "11px"};
`;
export default { searchBarContainer };

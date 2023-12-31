import styled from "@emotion/styled";
import theme from "../../theme";

export const Button = styled.button`
  width: 100%;
  border-radius: 40px;
  height: 48px;
  padding: 4px 24px;
  justify-content: center;
  align-items: center;
  display: flex;
  background: ${theme.colors.brown};
  color: ${theme.colors.white};
`;

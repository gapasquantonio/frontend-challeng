import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const RadioButton = styled.input`
  width: 24px;
  height: 24px;
  :before {
    content: "";
    display: block;
    width: 24px;
    height: 24px;
    background: white;
    border-radius: 50%;
    border: 2px solid #5f5f5f;
  }

  :checked:before {
    background: #5f5f5f;
  }
`;
export const itemQuantity = css`
  text-align: center;
  font-family: SF Pro Display;
`;
export default { itemQuantity };

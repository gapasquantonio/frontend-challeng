import styled from "@emotion/styled";

export const CartTitle = styled.span`
  color: var(--copy-main, #121212);
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  /* H1 New */
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.75px;
`;
export const ItemDescription = styled.span`
  color: var(--copy-secondary, #464646);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.5px;
`;
export const ItemSizeTitle = styled.span`
  color: var(--copy-secondary, #464646);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.5px;
`;
export const ItemExtra = styled.span`
  color: var(--copy-main, #121212);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const ItemPrice = styled.span`
  color: var(--copy-secondary, #464646);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
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
export const ItemQuantity = styled.span`
  color: var(--copy-main, #121212);
  text-align: center;
  font-family: SF Pro Display;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

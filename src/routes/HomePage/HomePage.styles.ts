import { css } from "@emotion/react";

const pageContainer = (isMobile: boolean) =>
  css(`
    display: flex;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
    background: ${isMobile ? "#fff" : "#F8F9FA"};
    align-items:center;
    padding-bottom: 32px;
    max-height: calc(
      100vh - ${isMobile ? "202px" : "214px"}
    );
    overflow:auto;
`);

export default {
  pageContainer,
};

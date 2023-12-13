import { css } from "@emotion/react";

const sectionItemDescription = css`
font-feature-settings: 'clig' off, 'liga' off;
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
  }
`;

export default { sectionItemDescription };

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Pages from "./pages";
import { css, Global } from "@emotion/react";
import { useResizeDetector } from "react-resize-detector";

const globalStyles = css`
  html,
  body,
  #root,
  #main {
    height: 100%;
    margin: 0;
  }
`;
const fullHeightAndWidth = {
  width: "100vw",
  height: "100vh",
};
function App() {
  const PagesCasted = Pages as unknown as React.FC;
  const { ref } = useResizeDetector({ handleHeight: false });

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={
            <>
              <Global styles={globalStyles} />
              <div css={fullHeightAndWidth} ref={ref}>
                <PagesCasted />
              </div>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useAppDispatch } from "./store/hooks";
import Pages from "./pages";
import { css, Global } from "@emotion/react";
import { useResizeDetector } from "react-resize-detector";
import { useEffect } from "react";
import { setDeviceWidth } from "./store/device/device.slice";
import ContainerModal from "./features/ContainerModal/ContainerModal";

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
  const { width, ref } = useResizeDetector({ handleHeight: false });
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setDeviceWidth(width));
  }, [width]);
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
                <ContainerModal />
              </div>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

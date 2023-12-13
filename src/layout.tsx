import { Outlet } from "react-router-dom";
import styled from "@emotion/styled";
import useIsMobile from "./hooks/useIsMobile";
import theme from "./theme";
import TopNavigation from "./features/TopNavigation";

export type TopNavContainerProps = {
  headerAndFooterHeight: number;
};
const PageContainer = styled.div<TopNavContainerProps>`
  background-color: ${theme.colors.white};
  height: calc(
    100vh - ${({ headerAndFooterHeight }) => headerAndFooterHeight}px
  );
`;

const ContentContainer = styled.div<TopNavContainerProps>`
  display: flex;
  margin: auto;
  height: calc(
    100vh -
      ${({ headerAndFooterHeight }) =>
        `${headerAndFooterHeight}headerAndFooterHeightpx`}
  );

  flex-direction: column;
`;

export default function Layout() {
  const isMobile = useIsMobile();

  const getFooterAndHeaderTotalHeigth = (): number => {
    if (!isMobile) {
      return 0;
    }

    return 0;
  };

  return (
    <>
      <TopNavigation />
      <PageContainer headerAndFooterHeight={getFooterAndHeaderTotalHeigth()}>
        <ContentContainer
          headerAndFooterHeight={getFooterAndHeaderTotalHeigth()}
        >
          <Outlet />
        </ContentContainer>
      </PageContainer>
    </>
  );
}

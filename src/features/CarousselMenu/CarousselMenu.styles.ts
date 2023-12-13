import styled from "@emotion/styled";
import { Restaurant } from "../../models/Restaurant";

export type TopNavContainerProps = Pick<Restaurant, "webSettings"> & {
  isMobile: boolean;
};
export const TopNavContainer = styled.div<TopNavContainerProps>`˜
	height: 100%;
	${({ webSettings }) =>
    `
		background-color:${webSettings.navBackgroundColour};
  `}

	align-items: center;
	display: flex;
	flex-direction: column;
	overflow: hidden;
`;

export type ImageBannerProps = {
  isMobile: boolean;
  src: string;
};
export const ImageBanner = styled.image<ImageBannerProps>`
  height: 100%;
  width: 100%;
  display: flex;
`;

export const TopNavigationMenu = styled.nav<TopNavContainerProps>`
  display: flex;
  flex-direction: ${({ isMobile }) => (isMobile ? "column" : "row")};
  justify-content: center;

  text-align: left;
  transition: transform 0.3s ease-in-out;

  a {
    color: ${({ webSettings }) => webSettings.backgroundColour};
    text-decoration: none;
    transition: color 0.3s linear;

    text-align: center;
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.1px;
    text-transform: uppercase;
    width: 232px;
    padding-top: 14.5px;
    padding-bottom: 14.5px;

    &:hover {
      cursor: pointer;
    }
  }
`;

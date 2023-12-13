import React, { useState } from "react";
import { TopNavContainer, TopNavigationMenu } from "./TopNavigation.styles";
import { useAppSelector } from "../../store/hooks";
import { selectSelectedRestaurantDetails } from "../../store/restaurant/restaurant.slice";
import useIsMobile from "../../hooks/useIsMobile";
import { useNavigate } from "react-router-dom";
import { css } from "@emotion/react";
import { HamburguerIcon } from "../../assets/icons";
import { Flex, NavbarItemMenu } from "../../components";
export interface MockedNavbarItens {
  onClick: () => void;
  title: string;
}
function TopNavigation() {
  const restaurantDetails = useAppSelector(selectSelectedRestaurantDetails);
  const { webSettings } = restaurantDetails ?? {};
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(0);
  const [showMobileNavbar, setShowMobileNavbar] = useState(false);
  const toggleMobileNavbar = () => {
    setShowMobileNavbar(!showMobileNavbar);
  };
  const handleOnSelectedItemClick = (number: number, redirectTo: string) => {
    setSelectedItem(number);
    return navigate(redirectTo);
  };
  const mockedNavbarItens = [
    { onClick: () => handleOnSelectedItemClick(0, "/"), title: "Menu" },
    { onClick: () => handleOnSelectedItemClick(1, "/login"), title: "Entrar" },
    {
      onClick: () => handleOnSelectedItemClick(2, "/contato"),
      title: "Contato",
    },
  ];
  return (
    webSettings && (
      <TopNavContainer isMobile={isMobile} webSettings={webSettings}>
        {isMobile ? (
          <TopNavigationMenu isMobile={isMobile} webSettings={webSettings}>
            <Flex flexDirection="column">
              <Flex alignItems="center">
                <NavbarItemMenu
                  title={mockedNavbarItens[selectedItem].title}
                  onClick={mockedNavbarItens[selectedItem].onClick}
                  selected={false}
                />
                <Flex
                  onClick={toggleMobileNavbar}
                  css={css`
                    cursor: pointer;
                  `}
                >
                  <HamburguerIcon />
                </Flex>
              </Flex>
              {showMobileNavbar && (
                <Flex flexDirection="column">
                  {mockedNavbarItens &&
                    mockedNavbarItens.map(({ title, onClick }, index) => {
                      return (
                        <NavbarItemMenu
                          title={title}
                          onClick={onClick}
                          selected={selectedItem === index}
                          key={`navbar_item_${index}`}
                        />
                      );
                    })}
                </Flex>
              )}
            </Flex>
          </TopNavigationMenu>
        ) : (
          <TopNavigationMenu isMobile={isMobile} webSettings={webSettings}>
            {mockedNavbarItens &&
              mockedNavbarItens.map(({ title, onClick }, index) => {
                return (
                  <NavbarItemMenu
                    title={title}
                    onClick={onClick}
                    selected={selectedItem === index}
                    key={`navbar_item_${index}`}
                  />
                );
              })}
          </TopNavigationMenu>
        )}
        <img
          src={webSettings.bannerImage}
          alt="teste"
          css={css`
            width: ${isMobile ? "fit-content" : "100%"};
            height: 150px;
            overflow: hidden;
          `}
        />
      </TopNavContainer>
    )
  );
}

export default React.memo(TopNavigation);

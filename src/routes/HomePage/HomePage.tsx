import React from "react";
import styles from "./HomePage.styles";
import useIsMobile from "../../hooks/useIsMobile";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { selectMenuDetails } from "../../store/menu/menu.slice";
import { MenuSection } from "../../models/MenuDetails";
import { css } from "@emotion/react";
import { LinkButton, Button, Flex, SearchBar } from "../../components/";
import { selectCartDetails } from "../../store/cart/cart.slice";
import { closeModal } from "../../store/modal/modal.slice";
import { Cart } from "../../models/Cart";
import { selectSelectedRestaurantDetails } from "../../store/restaurant/restaurant.slice";
import ModalHelper from "../../helpers/modal.helper";
import {
  CarousselMenu,
  CartCard,
  CartDetail,
  SectionMenu,
} from "../../features";

const Homepage: React.FC = () => {
  const isMobile = useIsMobile();
  const menuDetails = useAppSelector(selectMenuDetails);
  const cartDetails = useAppSelector(selectCartDetails);
  const restaurantDetails = useAppSelector(selectSelectedRestaurantDetails);
  const dispatch = useAppDispatch();

  const handleClosemodal = () => {
    dispatch(closeModal());
  };
  const handleOpenModal = () => {
    ModalHelper.Show({
      children: (
        <CartDetail
          onClose={handleClosemodal}
          cartDetails={cartDetails?.cart as Cart[]}
          currency={String(restaurantDetails?.currency)}
          isMobile={isMobile}
        />
      ),
    });
  };
  return (
    <Flex css={styles.pageContainer(isMobile)}>
      <SearchBar inputPlaceholder="Search menu items" isMoible={isMobile} />
      <Flex
        gap={24}
        margin="0 auto"
        justifyContent="center"
        alignItems="flex-start"
        paddingTop={32}
        maxWidth={1024}
        paddingX={isMobile ? 0 : 40}
        flexDirection={isMobile ? "column" : "row"}
      >
        <Flex
          paddingX={isMobile ? 0 : 32}
          paddingY={isMobile ? 0 : 40}
          flexDirection="column"
          background={isMobile ? "transparent" : "#fff"}
          css={
            !isMobile
              ? css`
                  box-shadow: 0px 2px 14px 0px #00000026;
                `
              : ""
          }
        >
          <Flex paddingX={isMobile ? 0 : 40}>
            <CarousselMenu
              carousselItensList={menuDetails?.sections as MenuSection[]}
            />
          </Flex>
          <Flex
            paddingX={isMobile ? 16 : 40}
            flexDirection={"column"}
            maxWidth={"1024px"}
          >
            {menuDetails?.sections.map((sectionMenu) => {
              return (
                <SectionMenu
                  sectionMenuDetails={sectionMenu}
                  key={sectionMenu.id}
                  isMobile={isMobile}
                />
              );
            })}
          </Flex>
        </Flex>
        {!isMobile && (
          <Flex>
            <CartCard
              cartDetails={cartDetails?.cart as Cart[]}
              currency={String(restaurantDetails?.currency)}
            />
          </Flex>
        )}
        {isMobile && (
          <Flex flexDirection="column" width="100%" gap={4}>
            <Flex
              backgroundColor="white"
              height={19}
              paddingY={24}
              width="100%"
              css={css`
                border-top: 1px solid var(--background-subtle, #eee);
                border-bottom: 1px solid var(--background-subtle, #eee);
                background: var(--background-default, #f8f9fa);
              `}
            >
              <LinkButton
                children={"View allergy information"}
                onClick={() => {
                  console.log("clicked");
                }}
                isDisabled={false}
              />
            </Flex>

            {cartDetails?.cart && cartDetails?.cart?.length && (
              <Button onClick={handleOpenModal} isDisabled={false}>
                Your basket •
                {cartDetails?.cart?.length ? cartDetails?.cart?.length : 0}{" "}
                {cartDetails?.cart?.length === 1 ? "item" : "items"}
              </Button>
            )}
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};
export default Homepage;

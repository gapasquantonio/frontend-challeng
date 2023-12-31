import React from "react";
import { Cart } from "../../models/Cart";
import { Flex, StyledText } from "../../components";
import theme from "../../theme";
import {
  IconMinusComponentMobile,
  IconPlusComponentMobile,
} from "../../assets/icons";
import styles from "./CartListItem.styles";
import { css } from "@emotion/react";
import useCart from "../../hooks/useCart";

export interface ItemDetailComponentProps {
  cartDetail: Cart;
  currency: string;
}

function CartListItemComponent({
  cartDetail,
  currency,
}: ItemDetailComponentProps) {
  const { updateItemQuantity, getCartTotalItemPrice } = useCart();

  return (
    <Flex key={cartDetail.item.id} css={styles.cardListitemContainer}>
      <Flex flexDirection="column" gap={2}>
        <Flex>
          <StyledText variant="h4" color={theme.colors.main}>
            {cartDetail.item.name}
          </StyledText>
        </Flex>
        {cartDetail.item.description && (
          <Flex css={styles.cardListitemDescription}>
            <StyledText variant="h4" color={theme.colors.inactive}>
              {cartDetail.item.description}
            </StyledText>
          </Flex>
        )}
        {cartDetail.modifierSelected &&
          cartDetail.modifierSelected.length !== 0 && (
            <Flex css={styles.cardListitemDescription}>
              <StyledText variant="subtitle" color={theme.colors.main}>
                Modifiers
              </StyledText>
            </Flex>
          )}
        {cartDetail.modifierSelected &&
          cartDetail.modifierSelected.length !== 0 &&
          cartDetail?.modifierSelected.map((modifierSelectedItem) => {
            if (modifierSelectedItem.qty === 0) return;
            return (
              <Flex justifyContent={"space-between"} alignItems="flex-start">
                <Flex
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Flex>
                    <StyledText variant="h5" color={theme.colors.inactive}>
                      {modifierSelectedItem.name}
                    </StyledText>
                  </Flex>
                  <Flex
                    css={styles.cardListitemSumContainer}
                    key={modifierSelectedItem.id}
                  >
                    <Flex
                      onClick={() =>
                        updateItemQuantity(
                          cartDetail,
                          "decrease",
                          modifierSelectedItem.id
                        )
                      }
                    >
                      <IconMinusComponentMobile />
                    </Flex>
                    <Flex
                      css={css`
                        text-align: center;
                        font-feature-settings: "clig" off, "liga" off;
                      `}
                    >
                      <StyledText variant="subtitle" color={theme.colors.main}>
                        {modifierSelectedItem?.qty ?? cartDetail.qty}
                      </StyledText>
                    </Flex>
                    <Flex
                      onClick={() =>
                        updateItemQuantity(
                          cartDetail,
                          "increase",
                          modifierSelectedItem.id
                        )
                      }
                    >
                      <IconPlusComponentMobile />
                    </Flex>
                  </Flex>
                </Flex>
                <Flex css={styles.cardListitemCurrency}>
                  <StyledText variant="h3" color={theme.colors.inactive}>
                    {currency}
                    {(
                      (modifierSelectedItem?.qty ?? cartDetail?.qty) *
                      modifierSelectedItem?.price
                    ).toFixed(2)}
                  </StyledText>
                </Flex>
              </Flex>
            );
          })}
        {!cartDetail.modifierSelected && (
          <Flex css={styles.cardListitemSumContainer}>
            <Flex onClick={() => updateItemQuantity(cartDetail, "decrease")}>
              <IconMinusComponentMobile />
            </Flex>
            <Flex
              css={css`
                text-align: center;
                font-feature-settings: "clig" off, "liga" off;
              `}
            >
              <StyledText variant="subtitle" color={theme.colors.main}>
                {cartDetail.qty}
              </StyledText>
            </Flex>
            <Flex onClick={() => updateItemQuantity(cartDetail, "increase")}>
              <IconPlusComponentMobile />
            </Flex>
          </Flex>
        )}
      </Flex>
      <Flex css={styles.cardListitemCurrency}>
        <StyledText variant="h3" color={theme.colors.main}>
          {currency} {getCartTotalItemPrice(cartDetail?.item?.id).toFixed(2)}
        </StyledText>
      </Flex>
    </Flex>
  );
}

export default React.memo(CartListItemComponent);

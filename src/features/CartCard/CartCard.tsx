import React from "react";
import { CartCardContainer } from "./CartCard.styles";
import { Cart } from "../../models/Cart";
import { css } from "@emotion/react";
import theme from "../../theme";
import {
  IconMinusComponentMobile,
  IconPlusComponentMobile,
} from "../../assets/icons";
import { Flex, StyledText } from "../../components";
import { CartListItem } from "..";

export interface CartCardComponentProps {
  cartDetails: Cart[];
  currency: string;
}

function CartCardComponent({ cartDetails, currency }: CartCardComponentProps) {
  const totalSum = cartDetails?.reduce((sum, item) => sum + item.itemAmount, 0);
  return (
    <CartCardContainer>
      <Flex paddingX={24} paddingY={16}>
        <StyledText variant="h2" color={theme.colors.secondary}>
          Carrinho
        </StyledText>
      </Flex>
      {!cartDetails || cartDetails?.length === 0 ? (
        <Flex
          padding={24}
          css={css`
            font-feature-settings: "clig" off, "liga" off;
            background: white;
          `}
        >
          <StyledText variant="h4" color={theme.colors.secondary}>
            Seu carrinho esta vazio
          </StyledText>
        </Flex>
      ) : (
        <>
          <Flex
            paddingX={16}
            paddingY="8px"
            background="#fff"
            color="black"
            flexDirection="column"
          >
            {cartDetails.map((cartDetail) => {
              return (
                <CartListItem
                  cartDetail={cartDetail}
                  currency={currency}
                  key={cartDetail.item.id}
                />
              );
            })}
          </Flex>
          <Flex
            paddingX={16}
            paddingTop={16}
            paddingBottom="8px"
            justifyContent="space-between"
            alignItems="center"
          >
            <StyledText variant="h4" color={theme.colors.main}>
              SubTotal
            </StyledText>
            <StyledText variant="h3" color={theme.colors.main}>
              R${totalSum.toFixed(2)}
            </StyledText>
          </Flex>
          <Flex
            padding="16px"
            justifyContent="space-between"
            alignItems="center"
          >
            <StyledText variant="cartTitle" color={theme.colors.main}>
              Total:
            </StyledText>

            <StyledText
              variant="cartTitle"
              color={theme.colors.main}
              css={css`
                fontweight: 700;
              `}
            >
              R${totalSum.toFixed(2)}
            </StyledText>
          </Flex>
        </>
      )}
    </CartCardContainer>
  );
}

export default React.memo(CartCardComponent);

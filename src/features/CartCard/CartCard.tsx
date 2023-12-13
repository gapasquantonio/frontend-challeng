import React from "react";
import Flex from "../../components/Flex";
import { CartCardContainer } from "./CartCard.styles";
import { Cart } from "../../models/Cart";
import { css } from "@emotion/react";
import { StyledText } from "../../components/Text";
import theme from "../../theme";
import {
  IconMinusComponentMobile,
  IconPlusComponentMobile,
} from "../../assets/icons";

export interface CartCardComponentProps {
  cartDetails: Cart[];
  currency: string;
}

function CartCardComponent({ cartDetails, currency }: CartCardComponentProps) {
  console.log("cartDetails", cartDetails);
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
                <Flex
                  key={cartDetail.item.id}
                  css={css`
                    padding: 8px 16px;
                    align-items: flex-start;
                    align-self: stretch;
                    border-bottom: 1px solid var(--background-subtle, #eee);
                    background: var(--White, #fff);
                  `}
                  justifyContent="space-between"
                >
                  <Flex flexDirection="column" gap={2}>
                    <Flex>
                      <StyledText variant="h4" color={theme.colors.main}>
                        {cartDetail.item.name}
                      </StyledText>
                    </Flex>
                    {cartDetail.item.description && (
                      <Flex
                        css={css`
                          overflow: hidden;
                          text-overflow: ellipsis;
                          display: -webkit-box;
                          -webkit-line-clamp: 2;
                          -webkit-box-orient: vertical;
                        `}
                      >
                        <StyledText variant="h4" color={theme.colors.inactive}>
                          {cartDetail.item.description}
                        </StyledText>
                      </Flex>
                    )}
                    <Flex padding="8px" justifyContent="space-between" gap={4}>
                      <Flex>
                        <IconMinusComponentMobile />
                      </Flex>
                      <Flex
                        css={css`
                          text-align: center;
                          font-feature-settings: "clig" off, "liga" off;
                        `}
                      >
                        <StyledText
                          variant="subtitle"
                          color={theme.colors.main}
                        >
                          {cartDetail.qty}
                        </StyledText>
                      </Flex>
                      <Flex>
                        <IconPlusComponentMobile />
                      </Flex>
                    </Flex>
                  </Flex>
                  <Flex
                    css={css`
                      text-align: right;
                      font-feature-settings: "clig" off, "liga" off;
                      letter-spacing: 0.5px;
                      min-width: 80px;
                      justify-content: end;
                    `}
                  >
                    <StyledText variant="h3" color={theme.colors.main}>
                      {currency} {cartDetail.itemAmount.toFixed(2)}
                    </StyledText>
                  </Flex>
                </Flex>
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

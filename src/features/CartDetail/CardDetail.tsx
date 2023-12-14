import React from "react";
import Flex from "../../components/Flex";
import { CartTitle } from "./CardDetail.styles";
import Button from "../../components/Button/Button";
import { css } from "@emotion/react";
import { Cart } from "../../models/Cart";
import { CloseIcon } from "../../assets/icons";
import { CartListItem } from "..";
import useCart from "../../hooks/useCart";

export interface ItemDetailComponentProps {
  onClose: () => void;
  cartDetails: Cart[];
  currency: string;
  isMobile: boolean;
}

function CartDetailComponent({
  onClose,
  cartDetails,
  currency,
}: ItemDetailComponentProps) {
  const { getCartTotalItemPrice } = useCart();
  const totalSum = cartDetails?.reduce(
    (sum, item) => sum + getCartTotalItemPrice(item?.item?.id as number),
    0
  );

  return (
    <Flex flexDirection="column" width={"100%"} height={"100%"}>
      <Flex
        css={css`
          background: var(--White, #fff);
          height: 64px;
          padding: 14px 16px;
          align-items: center;
        `}
      >
        <Flex flex={1} alignItems="center" justifyContent="center">
          <CartTitle>Basket</CartTitle>
        </Flex>
        <Flex
          css={css`
            padding: 8px 0px;
            flex-direction: column;
            align-items: flex-start;
            align-self: stretch;
            svg {
              background: transparent;
            }
          `}
          alignItems="center"
          justifyContent="center"
          onClick={onClose}
        >
          <CloseIcon />
        </Flex>
      </Flex>
      {cartDetails.map((cartDetail) => {
        return (
          <CartListItem
            cartDetail={cartDetail}
            currency={currency}
            key={cartDetail.item.id}
          />
        );
      })}

      <Flex
        padding={16}
        backgroundColor="#F8F9FA"
        justifyContent="space-between"
      >
        <Flex
          css={css`
            color: var(--copy-main, #121212);
            font-feature-settings: "clig" off, "liga" off;
            font-family: Roboto;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
          `}
        >
          SubTotal
        </Flex>
        <Flex
          css={css`
            color: var(--copy-main, #121212);
            text-align: right;
            font-feature-settings: "clig" off, "liga" off;
            font-family: Roboto;
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            letter-spacing: 0.5px;
          `}
        >
          {currency} {totalSum.toFixed(2)}
        </Flex>
      </Flex>
      <Flex
        css={css`
          background: #f8f9fa;
        `}
      />
      <Flex
        padding={16}
        css={css`
          background: #f8f9fa;
        `}
        justifyContent="space-between"
      >
        <Flex
          css={css`
            color: var(--copy-main, #121212);
            font-family: Roboto;
            font-size: 24px;
            font-style: normal;
            font-weight: 300;
            line-height: normal;
          `}
        >
          Total:
        </Flex>
        <Flex
          css={css`
            color: var(--copy-main, #121212);
            text-align: right;
            font-family: Roboto;
            font-size: 24px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
          `}
        >
          {currency} {totalSum.toFixed(2)}
        </Flex>
      </Flex>
      <Flex alignItems="end" flex={1} background="#f8f9fa" padding={24}>
        <Button
          onClick={() => {
            alert("Thanks for reviewing it!!!");
          }}
          isDisabled={false}
        >
          Checkout now
        </Button>
      </Flex>
    </Flex>
  );
}

export default React.memo(CartDetailComponent);

import React from "react";
import Flex from "../../components/Flex";
import { CartTitle } from "./CardDetail.styles";
import Button from "../../components/Button/Button";
import { css } from "@emotion/react";
import { Cart } from "../../models/Cart";
import {
  CloseIcon,
  IconMinusComponentMobile,
  IconPlusComponentMobile,
} from "../../assets/icons";

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
  console.log("cartDetails", cartDetails);
  const totalSum = cartDetails.reduce((sum, item) => sum + item.itemAmount, 0);

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
              <Flex
                css={css`
                  color: var(--copy-main, #121212);
                  font-family: Roboto;
                  font-size: 16px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: normal;
                `}
              >
                {cartDetail.item.name}
              </Flex>
              {cartDetail.item.description && (
                <Flex
                  css={css`
                    color: var(--cta-styling-state-inactive-copy, #5f5f5f);
                    font-family: Roboto;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                  `}
                >
                  {cartDetail.item.description}
                </Flex>
              )}
              <Flex padding="8px" justifyContent="space-between" gap={4}>
                <Flex
                  css={css`
                    color: var(--copy-main, #121212);
                    text-align: center;
                    font-feature-settings: "clig" off, "liga" off;
                    font-family: Roboto;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 700;
                    line-height: normal;
                  `}
                >
                  <IconMinusComponentMobile />
                </Flex>
                <Flex
                  css={css`
                    color: var(--copy-main, #121212);
                    text-align: center;
                    font-feature-settings: "clig" off, "liga" off;
                    font-family: Roboto;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 700;
                    line-height: normal;
                  `}
                >
                  {cartDetail.qty}
                </Flex>
                <Flex
                  css={css`
                    color: var(--copy-main, #121212);
                    text-align: center;
                    font-feature-settings: "clig" off, "liga" off;
                    font-family: Roboto;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 700;
                    line-height: normal;
                  `}
                >
                  <IconPlusComponentMobile />
                </Flex>
              </Flex>
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
                min-width: 80px;
                justify-content: end;
              `}
            >
              {currency} {cartDetail.itemAmount.toFixed(2)}
            </Flex>
          </Flex>
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
            console.log("a");
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
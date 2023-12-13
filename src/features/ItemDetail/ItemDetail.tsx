import React, { useEffect, useMemo, useState } from "react";
import Flex from "../../components/Flex";
import styles, { RadioButton } from "./ItemDetail.styles";
import Button from "../../components/Button/Button";
import { css } from "@emotion/react";
import { Item, ModifierItem } from "../../models/MenuDetails";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { StyledText } from "../../components/Text";
import theme from "../../theme";
import {
  CloseIcon,
  IconPlusComponent,
  IconMinusComponent,
} from "../../assets/icons";
import {
  selectCartDetails,
  setAddItemToCart,
  setUpdateItemToCartById,
} from "../../store/cart/cart.slice";

export interface ItemDetailComponentProps {
  onClose: () => void;
  itemDetails: Item;
  currency: string;
  isMobile: boolean;
}

function ItemDetailComponent({
  onClose,
  itemDetails,
  currency,
  isMobile,
}: ItemDetailComponentProps) {
  const { images, name, description, modifiers, price, id } = itemDetails;
  const [ItemQuantityCounter, setItemQuantiyCounter] = useState(1);
  const [checkedOption, setCheckedOption] = useState<number>();
  const [basePrice, setBasePrice] = useState(price);
  const [totalAmount, setTotalAmount] = useState(0);
  const dispatch = useAppDispatch();
  const isDisabled = basePrice === 0 && modifiers?.length !== 0;
  const cartDetails = useAppSelector(selectCartDetails);
  const handleCheckOption = (item: ModifierItem) => {
    if (item.id === checkedOption) {
      setBasePrice(0);
      return setCheckedOption(undefined);
    }
    setItemQuantiyCounter(1);
    setBasePrice(item.price);
    setTotalAmount(item.price);
    setCheckedOption(item.id);
  };
  const cart = useMemo(() => {
    return cartDetails && cartDetails?.cart;
  }, [checkedOption, cartDetails?.cart]);

  const handleIncrease = () => {
    setItemQuantiyCounter((prev) => prev + 1);
  };
  const handleDecrease = () => {
    if (ItemQuantityCounter === 1) return;
    setItemQuantiyCounter((prev) => prev - 1);
  };
  useEffect(() => {
    setTotalAmount(basePrice * ItemQuantityCounter);
  }, [ItemQuantityCounter]);

  const handleAddItemToCart = () => {
    const teste = cart?.find((ca) => {
      return ca?.item?.modifiers?.map((modifier) => {
        return modifier.id === checkedOption
          ? {
              ...modifier,
              items: [
                {
                  ...modifier?.items,
                  qty: modifier?.items[0].qty
                    ? +ItemQuantityCounter + modifier?.items[0].qty
                    : ItemQuantityCounter,
                },
              ],
            }
          : modifier;
      });
    });

    const testeA = cart?.find((ca) => {
      return ca.item.id === id;
    });

    if (!!teste && checkedOption) {
      const payload = {
        item: itemDetails,
        qty: ItemQuantityCounter + teste.qty,
        itemAmount: totalAmount + teste.itemAmount,
        modifierSelected: {
          ...(teste?.modifierSelected as ModifierItem[]),
        },
      };
      dispatch(setUpdateItemToCartById(payload));
      return onClose();
    }
    if (testeA) {
      const payload = {
        item: itemDetails,
        qty: ItemQuantityCounter + testeA.qty,
        itemAmount: totalAmount + testeA.itemAmount,
      };
      dispatch(setUpdateItemToCartById(payload));
      return onClose();
    }
    const payload = {
      item: itemDetails,
      qty: ItemQuantityCounter,
      itemAmount: totalAmount,
      modifierSelected: [
        modifiers &&
          modifiers[0] &&
          modifiers[0]?.items?.find((item) => {
            return item.id === checkedOption;
          }),
      ] as ModifierItem[],
    };
    dispatch(setAddItemToCart(payload));
    onClose();
  };
  return (
    <Flex
      flexDirection="column"
      width={isMobile ? "100%" : 503}
      height={isMobile ? "100%" : 720}
    >
      <Flex flex={1} flexDirection="column">
        <Flex position="relative">
          {images && images[0]?.image && (
            <img
              src={images[0]?.image}
              width="100%"
              height={isMobile ? 265 : 320}
              css={css`
                display: block;
              `}
            />
          )}
          <Flex
            position="absolute"
            right={0}
            top={0}
            padding={16}
            css={css`
              cursor: pointer;
            `}
            onClick={onClose}
          >
            <CloseIcon />
          </Flex>
        </Flex>
        <Flex flexDirection="column" background="white" color="black" flex={1}>
          <Flex flexDirection="column" padding={16} gap="4px">
            <StyledText color={theme.colors.main} variant="title">
              {name}
            </StyledText>
            <StyledText variant="h4" color={theme.colors.main}>
              {description}
            </StyledText>
          </Flex>
          {modifiers && modifiers[0].items.length !== 0 && (
            <>
              <Flex
                flexDirection="column"
                paddingY={16}
                paddingX={24}
                background={isMobile ? "#F8F9FA%" : ""}
              >
                <StyledText variant="subtitle" color={theme.colors.main}>
                  Choose your size
                </StyledText>
                <StyledText variant="h4" color={theme.colors.main}>
                  Select 1 option
                </StyledText>
              </Flex>
              <Flex
                flexDirection="column"
                overflowY="scroll"
                maxHeight={isMobile ? "" : 24120}
              >
                {modifiers.map((modifier) => {
                  return modifier.items.map((modifieritem) => {
                    return (
                      <Flex
                        flexDirection="column"
                        key={modifieritem.id}
                        css={css`
                          ${isMobile
                            ? "box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.10);"
                            : ""}
                        `}
                      >
                        <Flex
                          justifyContent="space-between"
                          paddingY={16}
                          paddingX={24}
                          alignItems="center"
                        >
                          <Flex flexDirection="column">
                            <Flex>
                              <StyledText
                                variant="h3"
                                color={theme.colors.secondary}
                              >
                                {modifieritem.name}
                              </StyledText>
                            </Flex>
                            <Flex>
                              <StyledText
                                variant="h4"
                                color={theme.colors.secondary}
                              >
                                {currency}
                                {modifieritem.price}
                              </StyledText>
                            </Flex>
                          </Flex>
                          <Flex>
                            <RadioButton
                              type="radio"
                              checked={checkedOption === modifieritem.id}
                              onClick={() => handleCheckOption(modifieritem)}
                            />
                          </Flex>
                        </Flex>
                      </Flex>
                    );
                  });
                })}
              </Flex>
            </>
          )}

          <Flex
            flexDirection="column"
            height={isMobile ? "100%" : "122px"}
            paddingX={24}
            paddingBottom={24}
            alignItems="center"
            justifyContent="end"
            flex={1}
            gap={5}
          >
            <Flex gap={8} alignItems="center">
              <Flex
                css={css`
                  cursor: pointer;
                `}
                onClick={handleDecrease}
              >
                <IconMinusComponent />
              </Flex>
              <Flex>
                <StyledText
                  variant="chip"
                  css={styles.itemQuantity}
                  color={theme.colors.main}
                >
                  {ItemQuantityCounter}
                </StyledText>
              </Flex>
              <Flex
                css={css`
                  cursor: pointer;
                `}
                onClick={handleIncrease}
              >
                <IconPlusComponent />
              </Flex>
            </Flex>
            <Flex width="100%" alignItems="end">
              <Button onClick={handleAddItemToCart} isDisabled={isDisabled}>
                <StyledText variant="button" color={theme.colors.white}>
                  Add to order • {currency}
                  {totalAmount.toFixed(2)}
                </StyledText>
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default React.memo(ItemDetailComponent);

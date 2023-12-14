import React, { useEffect, useState } from "react";
import styles, { RadioButton } from "./ItemDetail.styles";
import { css } from "@emotion/react";
import { Item, ModifierItem } from "../../models/MenuDetails";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { StyledText, Flex, Button } from "../../components/";
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
import useCart from "../../hooks/useCart";
import { Cart } from "../../models/Cart";

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
  const [checkedOption, setCheckedOption] = useState<ModifierItem>();
  const [basePrice, setBasePrice] = useState(price);
  const [totalAmount, setTotalAmount] = useState(0);
  const {
    checkIfItemAlreadyWasAddedInsideCart,
    preparePayloadItemToBeAdded,
    preparePayloadItemToBeUpdated,
  } = useCart();
  const dispatch = useAppDispatch();
  const isDisabled = basePrice === 0 && modifiers?.length !== 0;
  const cartDetails = useAppSelector(selectCartDetails);
  const handleCheckOption = (item: ModifierItem) => {
    if (item.id === checkedOption?.id) {
      setBasePrice(0);
      return setCheckedOption(undefined);
    }
    setItemQuantiyCounter(1);
    setBasePrice(item.price);
    setTotalAmount(item.price);
    setCheckedOption(item);
  };

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
    const isItemAleadyAddedToCart = checkIfItemAlreadyWasAddedInsideCart(
      id,
      cartDetails?.cart as Cart[]
    );
    if (!isItemAleadyAddedToCart) {
      const payload = preparePayloadItemToBeAdded(
        itemDetails,
        {
          totalAmout: totalAmount,
          itemQuantity: ItemQuantityCounter,
        },
        checkedOption
      );
      dispatch(setAddItemToCart(payload as Cart));

      return onClose();
    }
    const updatePayload = preparePayloadItemToBeUpdated(
      itemDetails,
      {
        totalAmout: totalAmount,
        itemQuantity: ItemQuantityCounter,
      },
      cartDetails?.cart as Cart[],
      checkedOption
    );
    dispatch(setUpdateItemToCartById(updatePayload));
    return onClose();
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
                              checked={checkedOption?.id === modifieritem.id}
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

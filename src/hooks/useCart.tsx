import { Cart } from "../models/Cart";
import { Item, ModifierItem } from "../models/MenuDetails";
import {
  selectCartDetails,
  setUpdateItemToCartById,
} from "../store/cart/cart.slice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

function useCart() {
  const dispatch = useAppDispatch();
  const cartDetails = useAppSelector(selectCartDetails);

  const findItemAddedIntoCart = (selectedItem: number, updatedCart: Cart[]) => {
    return updatedCart?.find((cart) => {
      if (!cart.item) {
        return;
      }
      return cart?.item.id === selectedItem;
    });
  };

  const preparePayloadItemToBeAdded = (
    itemDetails: Item,
    { totalAmout, itemQuantity }: { totalAmout: number; itemQuantity: number },
    modifierSelected?: ModifierItem
  ) => {
    const payload = {
      item: itemDetails,
      qty: itemQuantity,
      itemAmount: totalAmout,
      modifierSelected: modifierSelected && [modifierSelected],
    };
    return payload;
  };
  const preparePayloadItemToBeUpdated = (
    itemDetails: Item,
    { totalAmout, itemQuantity }: { totalAmout: number; itemQuantity: number },
    updatedCart: Cart[],
    modifierSelected?: ModifierItem
  ) => {
    const itemToBeUpdated = findItemAddedIntoCart(
      itemDetails?.id,
      updatedCart
    ) as Cart;
    if (!modifierSelected) {
      const updatedPayload = {
        ...itemToBeUpdated,
        qty: itemQuantity + itemToBeUpdated?.qty,
        itemAmount: totalAmout + itemToBeUpdated?.itemAmount,
      };

      return updatedPayload;
    }

    const prepareModifier = (
      modifierItems: ModifierItem[],
      selectedModifier: ModifierItem,
      quantitty: number
    ): ModifierItem[] => {
      const updatedModifiers = [...modifierItems];
      const existingModifierIndex = modifierItems.findIndex(
        (item) => item.id === selectedModifier.id
      );

      if (existingModifierIndex !== -1) {
        updatedModifiers[existingModifierIndex] = {
          ...updatedModifiers[existingModifierIndex],
          qty: updatedModifiers[existingModifierIndex]?.qty
            ? updatedModifiers[existingModifierIndex]?.qty! + quantitty
            : quantitty,
        };
      } else {
        updatedModifiers.push({ ...selectedModifier, qty: quantitty });
      }

      return updatedModifiers;
    };
    const updatedItemCart: Cart = {
      ...itemToBeUpdated,
      modifierSelected: prepareModifier(
        itemToBeUpdated.modifierSelected,
        modifierSelected,
        itemQuantity
      ),
      qty: itemQuantity + itemToBeUpdated?.qty,
      itemAmount: totalAmout + itemToBeUpdated?.itemAmount,
    };
    return updatedItemCart;
  };

  function getNewPrice(cart: Cart, updatedQuantity: number) {
    return cart.item.price * updatedQuantity;
  }
  function updateItemQuantity(
    cart: Cart,
    action: "increase" | "decrease",
    modifierId?: number
  ) {
    if (!modifierId) {
      const updatedQuantity =
        action === "increase"
          ? cart.qty + 1
          : action === "decrease" && cart.qty > 1
          ? cart.qty - 1
          : 0;
      const updatedCartItem = {
        ...cart,
        itemAmount: getNewPrice(cart, updatedQuantity),
        qty: updatedQuantity,
      };

      dispatch(setUpdateItemToCartById(updatedCartItem));
      return;
    } else {
      const selectedModifier = cart.modifierSelected.find(
        (modifier) => modifier.id === modifierId
      );
      const selectedModifierIndex = cart.modifierSelected.findIndex(
        (modifier) => modifier.id === modifierId
      );
      if (selectedModifier) {
        const updatedItem = {
          ...selectedModifier,
          qty:
            action === "increase"
              ? (selectedModifier.qty || 0) + 1
              : action === "decrease" &&
                selectedModifier.qty &&
                selectedModifier.qty > 1
              ? selectedModifier.qty - 1
              : 0,
        };
        const updatedModifiers = [...cart.modifierSelected];
        updatedModifiers[selectedModifierIndex] = updatedItem;
        const updatedCart = {
          ...cart,
          modifierSelected: updatedModifiers.filter((item) => item.qty !== 0),
        };

        dispatch(setUpdateItemToCartById(updatedCart));
        return;
      }
    }
  }
  const getCartQuantity = (itemId: number) => {
    const selectedCard = cartDetails?.cart?.find(
      (cartItem) => cartItem.item.id === itemId
    );

    if (!selectedCard?.modifierSelected) {
      return selectedCard?.qty;
    }
    const totalQuantity = selectedCard.modifierSelected.reduce(
      (sum, item) => sum + item?.qty!,
      0
    );
    return totalQuantity;
  };
  const getCartTotalItemPrice = (itemId: number) => {
    const selectedCard = cartDetails?.cart?.find(
      (cartItem) => cartItem?.item.id === itemId
    );
    if (!selectedCard?.modifierSelected) {
      return selectedCard?.itemAmount as number;
    }

    const totalSum = selectedCard.modifierSelected.reduce(
      (sum, item) => item?.price * (item?.qty ?? selectedCard.qty) + sum,
      0
    );

    return totalSum;
  };

  return {
    findItemAddedIntoCart,
    preparePayloadItemToBeAdded,
    preparePayloadItemToBeUpdated,
    updateItemQuantity,
    getCartQuantity,
    getCartTotalItemPrice,
  };
}

export default useCart;

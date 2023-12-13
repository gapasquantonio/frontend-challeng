import { Cart } from "../models/Cart";
import { Item, ModifierItem } from "../models/MenuDetails";
import { setUpdateItemToCartById } from "../store/cart/cart.slice";
import { useAppDispatch } from "../store/hooks";

function useCart() {
  const dispatch = useAppDispatch();
  const checkIfItemAlreadyWasAddedInsideCart = (
    selectedItem: number,
    updatedCart: Cart[]
  ) => {
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
    const itemToBeUpdated = checkIfItemAlreadyWasAddedInsideCart(
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
        // Se o item já existe, atualize apenas a propriedade necessária

        updatedModifiers[existingModifierIndex] = {
          ...updatedModifiers[existingModifierIndex],
          qty: updatedModifiers[existingModifierIndex]?.qty
            ? updatedModifiers[existingModifierIndex]?.qty! + quantitty
            : quantitty,
        };
      } else {
        // Se o item não existe, adicione-o à lista
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
        console.log("updatedItem", updatedItem);
      }
    }
  }

  return {
    checkIfItemAlreadyWasAddedInsideCart,
    preparePayloadItemToBeAdded,
    preparePayloadItemToBeUpdated,
    updateItemQuantity,
  };
}

export default useCart;

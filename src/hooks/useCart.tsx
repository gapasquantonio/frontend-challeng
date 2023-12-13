import { Cart } from "../models/Cart";
import { Item, ModifierItem } from "../models/MenuDetails";

function useCart() {
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
    console.log("updatedItemCart", updatedItemCart);
    return updatedItemCart;
  };

  return {
    checkIfItemAlreadyWasAddedInsideCart,
    preparePayloadItemToBeAdded,
    preparePayloadItemToBeUpdated,
  };
}

export default useCart;

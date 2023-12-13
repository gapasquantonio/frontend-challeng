import { Item, ModifierItem } from "./MenuDetails";

export type Cart = {
  item: Item;
  qty: number;
  itemAmount: number;
  modifierSelected?: ModifierItem[];
};

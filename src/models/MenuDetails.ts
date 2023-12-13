export type Item = {
  id: number;
  name: string;
  description?: string | null;
  alcoholic: number;
  price: number;
  position: number;
  visible?: number;
  availabilityType: string;
  sku?: string;
  images?: Image[];
  available: boolean;
  modifiers?: Modifier[];
};

type Modifier = {
  id: number;
  name: string;
  minChoices: number;
  maxChoices: number;
  items: ModifierItem[];
};
export type ModifierItem = {
  id: number;
  name: string;
  price: number;
  maxChoices: number;
  position: number;
  visible: number;
  availabilityType: string;
  qty?: number;
  available: boolean;
};

export type MenuSection = {
  id: number;
  name: string;
  description?: string | null;
  position: number;
  visible?: number;
  images: Image[];
  items: Item[];
};
type Image = { id: number; image: string };

export type Menu = {
  id: number;
  name: string;
  type: string;
  collapse: number;
  sections: MenuSection[];
};

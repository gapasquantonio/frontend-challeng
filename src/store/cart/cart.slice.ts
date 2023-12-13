import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Cart } from "../../models/Cart";

export interface CartState {
  cart?: Cart[];
}

const initialState: CartState = {};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setAddItemToCart: (state, { payload }: PayloadAction<Cart>): void => {
      state.cart = state?.cart ? [...state.cart, payload] : [payload];
    },
    setUpdateItemToCartById: (
      state,
      { payload }: PayloadAction<Cart>
    ): void => {
      state.cart = state?.cart?.map((item) =>
        item.item.id === payload.item.id ? payload : item
      );
    },
  },
});
export const { setAddItemToCart, setUpdateItemToCartById } = cartSlice.actions;

export const selectCartDetails = (state: RootState): CartState | undefined =>
  state.cart;

export default cartSlice.reducer;

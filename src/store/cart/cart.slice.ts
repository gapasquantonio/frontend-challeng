import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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
    setAddItemToCart: (state, { payload }: PayloadAction<Cart>) => {
      const updatedState = state?.cart ? [...state.cart, payload] : [payload];

      return Object.assign({}, state, { cart: updatedState });
    },
    setUpdateItemToCartById: (state, { payload }: PayloadAction<Cart>) => {
      const a = state?.cart
        ?.map((item) => {
          return item.item.id === payload.item.id ? payload : item;
        })
        .filter((cart) => {
          return cart.qty !== 0;
        });
      console.log("a", a);
      const newState = Object.assign({}, state, { cart: a });
      return newState;
    },
  },
});
export const { setAddItemToCart, setUpdateItemToCartById } = cartSlice.actions;

export const updateCartDetails = createAsyncThunk(
  "restaurant/updateCartDetails",
  async ({ cart, type }: { cart: Cart; type: "add" | "update" }) => {
    if (type === "add") {
      return setAddItemToCart(cart);
    }
    setUpdateItemToCartById(cart);
  }
);
export const selectCartDetails = (state: RootState): CartState | undefined =>
  state?.cart;

export default cartSlice.reducer;

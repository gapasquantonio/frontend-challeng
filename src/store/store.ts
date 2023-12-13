import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import deviceSlice from "./device/device.slice";
import modalSlice from "./modal/modal.slice";
import restaurantSlice from "./restaurant/restaurant.slice";
import menuSlice from "./menu/menu.slice";
import cartSlice from "./cart/cart.slice";

export const store = configureStore({
  reducer: {
    device: deviceSlice,
    modal: modalSlice,
    restaurant: restaurantSlice,
    menu: menuSlice,
    cart: cartSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

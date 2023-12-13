import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import deviceSlice from "./device/device.slice";
import modalSlice from "./modal/modal.slice";

export const store = configureStore({
  reducer: {
    device: deviceSlice,
    modal: modalSlice,
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

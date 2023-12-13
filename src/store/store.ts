import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import deviceSlice from "./device/device.slice";

export const store = configureStore({
  reducer: {
    device: deviceSlice,
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

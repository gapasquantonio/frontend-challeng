import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface DeviceState {
  deviceWidth?: number | null;
}

const initialState: DeviceState = {
  deviceWidth: null,
};

const deviceSlice = createSlice({
  name: "device",
  initialState,
  reducers: {
    setDeviceWidth: (state, { payload }): void => {
      state.deviceWidth = payload;
    },
  },
});

export const { setDeviceWidth } = deviceSlice.actions;

export const selectDeviceDetails = (state: RootState): DeviceState =>
  state.device;

export default deviceSlice.reducer;

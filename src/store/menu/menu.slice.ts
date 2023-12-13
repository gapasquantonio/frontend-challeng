import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Menu } from "../../models/MenuDetails";
import menuService from "../../services/menu.service";
import MockedMenu from "../../mocks/menu/MockedMenu";

export interface MenuState {
  menuDetails?: Menu;
}

const initialState: MenuState = {
  menuDetails: MockedMenu,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {},
});

export const fetchSelectedRestaurantDetails = createAsyncThunk(
  "restaurant/fetchSelectedRestaurantDetailsById",
  async (restaurantId: string) => {
    const menuDetails = await menuService.fetchMenuDetailsById(restaurantId);
    return menuDetails;
  }
);

export const selectMenuDetails = (state: RootState): Menu | undefined =>
  state.menu.menuDetails;

export default menuSlice.reducer;

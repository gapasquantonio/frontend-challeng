import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Restaurant } from "../../models/Restaurant";
import restaurantService from "../../services/restaurant.service";
import MockedRestaurant from "../../mocks/restaurant/MockedRestaurant";

export interface RestaurantState {
  selectedRestaurantDetails?: Restaurant;
}

const initialState: RestaurantState = {
  selectedRestaurantDetails: MockedRestaurant,
};

const relatorioSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setSelectedRestaurant: (state, { payload }): void => {
      state.selectedRestaurantDetails = payload;
    },
  },
});

export const { setSelectedRestaurant } = relatorioSlice.actions;

export const fetchSelectedRestaurantDetails = createAsyncThunk(
  "restaurant/fetchSelectedRestaurantDetailsById",
  async (restaurantId: string) => {
    const restaurantDetails =
      await restaurantService.fetchSelectedRestaurantDetailsById(restaurantId);
    return restaurantDetails;
  }
);

export const selectSelectedRestaurantDetails = (
  state: RootState
): Restaurant | undefined => state.restaurant.selectedRestaurantDetails;

export default relatorioSlice.reducer;

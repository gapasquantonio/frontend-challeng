import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Restaurant, WebSettings } from "../../models/Restaurant";
import restaurantService from "../../services/restaurant.service";

export interface RestaurantState {
  selectedRestaurantDetails?: Restaurant;
}

const initialState: RestaurantState = {
  selectedRestaurantDetails: {
    id: 7602,
    name: "BURGERS RESTAURANT",
    internalName: "BURGERS RESTAURANT",
    description: null,
    liveFlag: 1,
    demoFlag: 1,
    address1: "Rua XX-X, 1-11",
    address2: "XXX",
    address3: null,
    city: "Bauru",
    county: "BR",
    postcode: "17012-360",
    country: "BR",
    timezoneOffset: "-03:00",
    locale: "pt-BR",
    timeZone: "America/Sao_Paulo",
    webSettings: {
      id: 5854,
      venueId: 7602,
      bannerImage:
        "https://preodemo.gumlet.io/usr/venue/7602/web/646fbf3abf9d0.png",
      backgroundColour: "#ffffff",
      primaryColour: "#4f372f",
      primaryColourHover: "#4f372f",
      navBackgroundColour: "#4f372f",
    },
    ccy: "BRL",
    ccySymbol: "R$",
    currency: "R$",
  },
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
    const a = await restaurantService.fetchSelectedRestaurantDetailsById(
      restaurantId
    );
    return a;
  }
);

export const selectSelectedRestaurantDetails = (
  state: RootState
): Restaurant | undefined => state.restaurant.selectedRestaurantDetails;

export default relatorioSlice.reducer;

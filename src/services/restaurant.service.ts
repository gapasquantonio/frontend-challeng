import axios, { AxiosResponse } from "axios";
import { Config } from "../config";
import { Restaurant } from "../models/Restaurant";

const {
  API: { basePath },
} = Config;

class RestaurantApiService {
  fetchSelectedRestaurantDetailsById = (
    restaurantId: string
  ): Promise<AxiosResponse<Restaurant>> =>
    axios.get<Restaurant>(`${basePath}/${restaurantId}`);
}

export default new RestaurantApiService();

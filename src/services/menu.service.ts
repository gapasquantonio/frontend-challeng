import axios, { AxiosResponse } from "axios";
import { Config } from "../config";
import { Menu } from "../models/MenuDetails";

const {
  API: { basePath },
} = Config;

class MenuApiService {
  fetchMenuDetailsById = (restaurantId: string): Promise<AxiosResponse<Menu>> =>
    axios.get<Menu>(`${basePath}/${restaurantId}`);
}

export default new MenuApiService();

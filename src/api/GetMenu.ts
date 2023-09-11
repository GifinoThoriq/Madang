import axios, { AxiosResponse } from "axios";

interface ApiResponse<T> {
  data: T;
  status: number;
}

interface Menu {
  id: string;
  name: string;
  description: string;
  image: string;
  type: string;
  price: number;
}

export const GetMenu = async (): Promise<ApiResponse<Menu[]>> => {
  try {
    const response: AxiosResponse<Menu[]> = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/tabs/menus`
    );
    return { data: response.data, status: response.status };
  } catch (error) {
    throw error;
  }
};

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
      `https://sheet.best/api/sheets/ca770eb1-6828-4193-8210-46e9d2820f85/tabs/menus`
    );
    return { data: response.data, status: response.status };
  } catch (error) {
    throw error;
  }
};

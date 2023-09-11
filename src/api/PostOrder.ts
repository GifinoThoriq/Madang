import axios, { AxiosResponse } from "axios";

interface ApiResponse<T> {
  data: T;
  status: number;
}

interface Response {
  [key: string]: any;
}

interface Orders {
  description: string;
  id: string;
  image: string;
  name: string;
  price: number;
  type: string;
  [key: string]: any;
}

interface SendOrdersData {
  Menu: Orders[];
  TotalPrice: number;
}

export const PostOrder = async (
  dataOrders: SendOrdersData
): Promise<ApiResponse<Response>> => {
  try {
    const response: AxiosResponse<Response> = await axios.post(
      `https://sheet.best/api/sheets/ca770eb1-6828-4193-8210-46e9d2820f85/tabs/orders`,
      dataOrders
    );
    return { data: response.data, status: response.status };
  } catch (error) {
    throw error;
  }
};

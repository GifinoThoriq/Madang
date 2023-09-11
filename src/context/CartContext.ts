import React from "react";

interface ItemType {
  id: string;
  name: string;
  description: string;
  image: string;
  type: string;
  price: number;
  [key: string]: any;
}

interface CartContextType {
  items: ItemType[];
  totalPrice: number;
  addItem: (item: ItemType) => void;
  removeItem: (id: string) => void;
}

const defaultCartValue: CartContextType = {
  items: [],
  totalPrice: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
};

const CartContext = React.createContext<CartContextType>(defaultCartValue);

export default CartContext;

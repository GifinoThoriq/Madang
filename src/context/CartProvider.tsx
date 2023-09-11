import React, { FC, ReactNode, useReducer } from "react";
import CartContext from "./CartContext";

interface MyComponentProps {
  children: ReactNode;
}

interface ItemType {
  id: string;
  name: string;
  description: string;
  image: string;
  type: string;
  price: number;
  [key: string]: any;
}

interface cartStateType {
  items: ItemType[];
  totalPrice: number;
}

type cartActionType =
  | { type: "ADD_ITEM"; payload: ItemType }
  | { type: "REMOVE_ITEM"; id: string }
  | { type: "DELETE_ITEM"; id: string };

interface cartContextType {
  items: ItemType[];
  totalPrice: number;
  addItem: (item: ItemType) => void;
  removeItem: (id: string) => void;
  deleteItem: (id: string) => void;
}

const defaultCartState: cartStateType = {
  items: [],
  totalPrice: 0,
};

const cartReducer = (
  state: cartStateType,
  action: cartActionType
): cartStateType => {
  if (action.type === "ADD_ITEM") {
    const updateTotalPrice: number =
      state.totalPrice + action.payload.price * action.payload.amount;

    const cartItemExistingIndex: number = state.items.findIndex(
      (payload) => payload.id === action.payload.id
    );

    const cartItemExist: ItemType = state.items[cartItemExistingIndex];

    let updatedCartItem: ItemType[] = [];

    if (cartItemExist) {
      const updateCartItem: ItemType = {
        ...cartItemExist,
        amount: cartItemExist.amount + action.payload.amount,
      };

      updatedCartItem = [...state.items];
      updatedCartItem[cartItemExistingIndex] = updateCartItem;
    } else {
      updatedCartItem = state.items.concat(action.payload);
    }

    return {
      items: updatedCartItem,
      totalPrice: updateTotalPrice,
    };
  }

  if (action.type === "REMOVE_ITEM") {
    const cartItemExistRemoveIndex: number = state.items.findIndex(
      (item) => item.id === action.id
    );

    const cartItemExistRemove: ItemType = state.items[cartItemExistRemoveIndex];

    const updateTotalPrice = state.totalPrice - cartItemExistRemove.price;

    let updatedCartItem: ItemType[] = [];

    if (cartItemExistRemove.amount === 1) {
      updatedCartItem = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem: ItemType = {
        ...cartItemExistRemove,
        amount: cartItemExistRemove.amount - 1,
      };
      updatedCartItem = [...state.items];
      updatedCartItem[cartItemExistRemoveIndex] = updatedItem;
    }

    return {
      items: updatedCartItem,
      totalPrice: updateTotalPrice,
    };
  }

  if (action.type === "DELETE_ITEM") {
    console.log("hapus");
  }

  return state;
};

const CartProvider: FC<MyComponentProps> = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemHandler = (item: ItemType): void => {
    dispatchCartAction({ type: "ADD_ITEM", payload: item });
  };

  const removeItemHandler = (id: string): void => {
    dispatchCartAction({ type: "REMOVE_ITEM", id });
  };

  const deleteItemHandler = (id: string): void => {
    dispatchCartAction({ type: "DELETE_ITEM", id });
  };

  const cartContext: cartContextType = {
    items: cartState.items,
    totalPrice: cartState.totalPrice,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    deleteItem: deleteItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;

import React, { FC, useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import { CartItem } from "./CartItem";
import { CartContainer } from "../../ui/cart/CartContainer";
import { PostOrder } from "../../api/PostOrder";

interface ItemType {
  id: string;
  name: string;
  description: string;
  image: string;
  type: string;
  price: number;
  [key: string]: any;
}

interface CartType {
  isOpen: boolean;
  onClose: () => void;
}

interface SendOrdersData {
  Menu: ItemType[];
  TotalPrice: number;
}

interface Response {
  [key: string]: any;
}

export const Cart: FC<CartType> = (props) => {
  const cartCtx = useContext(CartContext);

  const [response, setResponse] = useState<Response | null>(null);

  const addHandler = (item: ItemType): void => {
    cartCtx.addItem({
      ...item,
      amount: 1,
    });
  };

  const removeHandler = (id: string): void => {
    cartCtx.removeItem(id);
  };

  const btnRef = React.useRef<HTMLButtonElement | null>(null);

  const addToCartHandler = async () => {
    const dataOrders: SendOrdersData = {
      Menu: cartCtx.items,
      TotalPrice: cartCtx.totalPrice,
    };

    try {
      const result = await PostOrder(dataOrders);
      setResponse(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <CartContainer
      totalPrice={cartCtx.totalPrice}
      isOpen={props.isOpen}
      onClose={props.onClose}
      btnRef={btnRef}
      onAddToCart={addToCartHandler}
    >
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          image={item.image}
          name={item.name}
          amount={item.amount}
          price={item.price}
          totalPriceItem={item.price * item.amount}
          description={item.description}
          onAdd={addHandler.bind(null, item)}
          onRemove={removeHandler.bind(null, item.id)}
          type={item.type}
        />
      ))}
    </CartContainer>
  );
};

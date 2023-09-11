import { FC } from "react";
import { CartItemUI } from "../../ui/cart/CartItemUi";

interface CartItemType {
  id: string;
  name: string;
  description: string;
  image: string;
  amount: number;
  type: string;
  price: number;
  onAdd: () => void;
  onRemove: () => void;
  totalPriceItem: number;
}

export const CartItem: FC<CartItemType> = (props) => {
  return (
    <CartItemUI
      key={props.id}
      id={props.id}
      image={props.image}
      name={props.name}
      amount={props.amount}
      price={props.price}
      description={props.description}
      totalPriceItem={props.totalPriceItem}
      type={props.type}
      onAdd={props.onAdd}
      onRemove={props.onRemove}
    />
  );
};

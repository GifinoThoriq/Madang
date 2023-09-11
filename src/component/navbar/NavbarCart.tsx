import { FC, useContext } from "react";
import CartContext from "../../context/CartContext";
import { NavCartUI } from "../../ui/nav/NavCartUI";

export const NavbarCart: FC = () => {
  const cartCtx = useContext(CartContext);

  const totalAmount: number = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return <NavCartUI amount={totalAmount} />;
};

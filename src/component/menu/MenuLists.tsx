import { FC, useContext } from "react";
import CartContext from "../../context/CartContext";
import MenuAmount from "./MenuAmount";
import { MenuCardContainer } from "../../ui/menu/MenuCardContainer";
import { MenuCardBody } from "../../ui/menu/MenuCardBody";
import { useToast } from "@chakra-ui/react";

interface MenuData {
  id: string;
  name: string;
  description: string;
  image: string;
  type: string;
  price: number;
}

export const MenuLists: FC<MenuData> = (props) => {
  const cartCtx = useContext(CartContext);
  const toast = useToast();

  const onAddToCartHandler = (amount: number): void => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      description: props.description,
      amount: amount,
      price: props.price,
      type: props.type,
      image: props.image,
    });

    toast({
      title: "Item has been added to your cart",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <MenuCardContainer>
      <MenuCardBody
        image={props.image}
        name={props.name}
        price={props.price}
        description={props.description}
        type={props.type}
      />
      <MenuAmount onAddToCart={onAddToCartHandler} />
    </MenuCardContainer>
  );
};

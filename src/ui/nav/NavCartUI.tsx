import React, { FC } from "react";
import { Icon, Text, Circle } from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";
import { useDisclosure } from "@chakra-ui/react";
import { Cart } from "../../component/cart/Cart";

interface NavCartUIType {
  amount: number;
}

export const NavCartUI: FC<NavCartUIType> = ({ amount }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Icon as={FiShoppingCart} w={8} h={8} onClick={onOpen} />
      <Circle
        position={"relative"}
        top={"-11px"}
        right={"26px"}
        bg={"red.300"}
        size={"24px"}
      >
        <Text>{amount}</Text>
      </Circle>
      <Cart isOpen={isOpen} onClose={onClose} />
    </>
  );
};

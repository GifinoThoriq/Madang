import React, { FC, ReactNode } from "react";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Text,
  VStack,
  HStack,
} from "@chakra-ui/react";

interface CartContainerType {
  children: ReactNode;
  totalPrice: number;
  isOpen: boolean;
  onClose: () => void;
  btnRef: React.RefObject<HTMLButtonElement>;
  onAddToCart: () => void;
}

export const CartContainer: FC<CartContainerType> = (props) => {
  return (
    <Drawer
      isOpen={props.isOpen}
      placement="right"
      onClose={props.onClose}
      finalFocusRef={props.btnRef}
      size={"sm"}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Cart</DrawerHeader>

        <DrawerBody>{props.children}</DrawerBody>

        <DrawerFooter>
          <VStack width={"100%"}>
            <HStack width={"100%"} justifyContent={"space-between"}>
              <Text fontSize="lg">Total Price</Text>
              <Text fontSize="lg">{props.totalPrice}</Text>
            </HStack>
            <Button
              width={"100%"}
              colorScheme="blue"
              onClick={() => {
                props.onAddToCart();
              }}
            >
              Add to Cart
            </Button>
          </VStack>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

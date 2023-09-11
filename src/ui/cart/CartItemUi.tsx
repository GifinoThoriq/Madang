import { FC } from "react";
import {
  Flex,
  Image,
  Text,
  VStack,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { FiPlus, FiMinus } from "react-icons/fi";

interface CartItemType {
  id: string;
  name: string;
  description: string;
  image: string;
  amount: number;
  type: string;
  price: number;
  totalPriceItem: number;
  onAdd: () => void;
  onRemove: () => void;
}

export const CartItemUI: FC<CartItemType> = (props) => {
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"flex-start"}
      marginBottom={4}
    >
      <HStack>
        <Image
          boxSize={"100px"}
          height={"100px"}
          objectFit={"cover"}
          src={props.image}
          alt="img-menu"
        />
        <VStack height={"80px"} alignItems={"flex-start"}>
          <Text>{props.name}</Text>
          <Text>{props.price}</Text>
          <HStack>
            <IconButton
              aria-label="search database"
              icon={<FiMinus />}
              size={"sm"}
              onClick={props.onRemove}
            />
            <Text>{props.amount}</Text>
            <IconButton
              aria-label="search database"
              icon={<FiPlus />}
              size={"sm"}
              onClick={props.onAdd}
            />
          </HStack>
        </VStack>
      </HStack>
      <Text color={"blue.500"}>{props.totalPriceItem}</Text>
    </Flex>
  );
};

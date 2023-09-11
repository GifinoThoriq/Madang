import { FC } from "react";

import { CardBody, Image, Stack, Heading, Text, Badge } from "@chakra-ui/react";

interface CartBodyType {
  image: string;
  name: string;
  description: string;
  price: number;
  type: string;
}

export const MenuCardBody: FC<CartBodyType> = (props) => {
  return (
    <CardBody>
      <Image
        src={props.image}
        width={"200px"}
        height={"200px"}
        objectFit={"cover"}
        alt="foto makanan"
        borderRadius="lg"
      />
      <Stack mt="6" spacing="0.5">
        <Heading size="md">{props.name}</Heading>
        <Badge colorScheme={"blue"} w={"max-content"}>
          {props.type}
        </Badge>
        <Text>{props.description}</Text>
        <Text color="blue.600" fontSize="2xl">
          Rp. {props.price}
        </Text>
      </Stack>
    </CardBody>
  );
};

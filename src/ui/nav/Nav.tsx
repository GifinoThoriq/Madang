import { FC, ReactNode } from "react";
import { Flex, Heading, Input, Center } from "@chakra-ui/react";

interface MyComponentProps {
  children: ReactNode;
}

export const Nav: FC<MyComponentProps> = ({ children }) => {
  return (
    <Center boxShadow="base" p="6" rounded="md" bg="white">
      <Flex w={"1300px"} alignItems={"center"} justifyContent={"space-between"}>
        <Heading>Madang</Heading>
        <Flex alignItems={"center"} gap={4}>
          <Input w={"320px"} placeholder="Search" />
          {children}
        </Flex>
      </Flex>
    </Center>
  );
};

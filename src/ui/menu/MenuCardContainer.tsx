import { FC, ReactNode } from "react";
import { Card } from "@chakra-ui/react";

interface ComponentType {
  children: ReactNode;
}

export const MenuCardContainer: FC<ComponentType> = ({ children }) => {
  return (
    <Card maxW="sm" maxH={"5xl"}>
      {children}
    </Card>
  );
};

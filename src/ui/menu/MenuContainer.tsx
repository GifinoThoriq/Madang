import { Grid } from "@chakra-ui/react";
import { ReactNode, FC } from "react";

interface MenuContainerType {
  children: ReactNode;
}

export const MenuContainer: FC<MenuContainerType> = ({ children }) => {
  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={4}>
      {children}
    </Grid>
  );
};

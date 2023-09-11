import { FC } from "react";
import { NavbarCart } from "./NavbarCart";
import { Nav } from "../../ui/nav/Nav";

export const Navbar: FC = () => {
  return (
    <Nav>
      <NavbarCart />
    </Nav>
  );
};

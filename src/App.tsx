import React from "react";
import "./App.css";
import { Menu } from "./component/menu/Menu";
import CartProvider from "./context/CartProvider";
import { Navbar } from "./component/navbar/Navbar";
import { ChakraProvider } from "@chakra-ui/react";

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <CartProvider>
        <Navbar />
        <main>
          <Menu />
        </main>
      </CartProvider>
    </ChakraProvider>
  );
};

export default App;

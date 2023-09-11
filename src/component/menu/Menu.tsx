import naspad from "../../assets/nasi-padang.jpeg";
import { MenuLists } from "./MenuLists";
import { MenuContainer } from "../../ui/menu/MenuContainer";
import { useEffect, useState } from "react";
import { GetMenu } from "../../api/GetMenu";

export const Menu = () => {
  interface MenuData {
    id: string;
    name: string;
    description: string;
    image: string;
    type: string;
    price: number;
  }

  const [Menus, setMenus] = useState<MenuData[]>([]);

  const arrMenus: MenuData[] = [
    {
      id: "f1",
      name: "Nasi",
      description: "Nasi Padang",
      image: `${naspad}`,
      type: "food",
      price: 5000,
    },
    {
      id: "f2",
      name: "Ayam Gulai",
      description: "Ayam Gulai Padang",
      image: `${naspad}`,
      type: "food",
      price: 6000,
    },
    {
      id: "f3",
      name: "Telor Dadar",
      description: "Telor dadar padang",
      image: `${naspad}`,
      type: "food",
      price: 4000,
    },
    {
      id: "b1",
      name: "Teh Tawar Panas",
      description: "Teh tawar panas",
      image: `${naspad}`,
      type: "beverages",
      price: 3000,
    },
    {
      id: "bu1",
      name: "Paket Ayam",
      description: "Nasi Ayam Minum",
      image: `${naspad}`,
      type: "bundle",
      price: 15000,
    },
  ];

  // useEffect(() => {
  //   GetMenu()
  //     .then((response) => {
  //       setMenus(response.data);
  //     })
  //     .catch((error) => {
  //       setMenus(arrMenus);
  //       console.log(error);
  //     });
  // }, []);

  return (
    <MenuContainer>
      {arrMenus.map((item) => (
        <MenuLists
          key={item.id}
          id={item.id}
          name={item.name}
          description={item.description}
          image={item.image}
          type={item.type}
          price={item.price}
        />
      ))}
    </MenuContainer>
  );
};

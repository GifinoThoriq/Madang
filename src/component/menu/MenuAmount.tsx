import { useState, useRef, FC } from "react";
import { MenuCartFooter } from "../../ui/menu/MenuCardFooter";

interface addToCartType {
  onAddToCart: (value: number) => void;
}

const MenuAmount: FC<addToCartType> = (props) => {
  const [isDisable, setIsDisable] = useState(true);

  const inputAmount = useRef<HTMLInputElement | null>(null);

  const inputValidationHandler = (e: any): void => {
    if (e.target?.value < 1) {
      setIsDisable(true);
    } else if (e.target?.value >= 1) {
      setIsDisable(false);
    }
  };

  const submitHandler = (e: any): void => {
    e.preventDefault();

    const enterAmount: number | any = inputAmount.current?.value;
    const totalEnterAmount: number = +enterAmount;

    props.onAddToCart(totalEnterAmount);
  };

  return (
    <MenuCartFooter
      inputValidation={inputValidationHandler}
      isDisable={isDisable}
      submitHandler={submitHandler}
      ref={inputAmount}
    />
  );
};

export default MenuAmount;

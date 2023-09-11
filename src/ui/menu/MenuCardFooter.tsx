import { forwardRef } from "react";

import {
  CardFooter,
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Flex,
} from "@chakra-ui/react";

interface CartFooterType {
  submitHandler: (e: any) => void;
  isDisable: boolean;
  inputValidation: (e: any) => void;
}

export const MenuCartFooter = forwardRef<HTMLInputElement, CartFooterType>(
  (props, ref) => {
    return (
      <CardFooter>
        <form onSubmit={props.submitHandler}>
          <Flex gap={4}>
            <NumberInput w={"50%"} min={0} defaultValue={1}>
              <NumberInputField onChange={props.inputValidation} ref={ref} />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <Button
              variant="solid"
              colorScheme="blue"
              type="submit"
              disabled={props.isDisable}
              size="md"
            >
              Add to Cart
            </Button>
          </Flex>
        </form>
      </CardFooter>
    );
  }
);

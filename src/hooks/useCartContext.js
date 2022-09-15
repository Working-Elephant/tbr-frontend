import {CartContext} from "../context/cartContext";
import { useContext } from "react";

export const useCartContext = () => {
  const ccontext = useContext(CartContext);
  if (!ccontext) {
    throw new Error("useCartContext must be used within an CartContextProvider");
  }

  return ccontext;
};

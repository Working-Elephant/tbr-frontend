import React from "react";
import { createContext, useReducer } from "react";

export const CartContext = createContext();

const initialState = {
  quantity: 1,
  item: {},
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_CART":
      return { ...state, quantity: action.payload };

    default:
      return state;
  }
};

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

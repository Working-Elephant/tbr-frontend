import React, { createContext, useReducer } from "react";

export const AdsContext = createContext();

export const adsReducer = (state, action) => {
  switch (action.type) {
    case "GET_SINGLE_AD":
      return {
        ...state,
        singleAds: action.payload,
      };

    case "GET_ADS_BY_CATEGORY":
      return {
        ...state,
        adsByCategory: action.payload,
      };

    case "GET_FEATURED_ADS":
      return {
        ...state,
        featuredAds: action.payload,
      };
    case "GET_ORDER_ID":
      return {
        ...state,
        orderId: action.payload,
      };

    default:
      return state;
  }
};

export const AdsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(adsReducer, {
    singleAds: [],
  });

  return (
    <AdsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AdsContext.Provider>
  );
};

import { AdsContext } from "../context/AdsContext";
import { useContext } from "react";

export const useAdsContext = () => {
  const context = useContext(AdsContext);
  if (!context) {
    throw new Error(
      "usePostContext must be used within an PostContextProvider"
    );
  }

  return context;
};

import {PostContext} from "../context/postContext";
import { useContext } from "react";

export const useUserContext = () => {
  const pcontext = useContext(PostContext);
  if (!pcontext) {
    throw new Error("usePostContext must be used within an PostContextProvider");
  }

  return pcontext;
};
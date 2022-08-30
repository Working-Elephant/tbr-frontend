import {UserContext} from "../context/userContext";
import { useContext } from "react";

export const useUserContext = () => {
  const ucontext = useContext(UserContext);
  if (!ucontext) {
    throw new Error("useUserContext must be used within an UserContextProvider");
  }

  return ucontext;
};
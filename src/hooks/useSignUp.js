import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/user";
import { errorToast, success } from "../components/shared";
import useSignIn from "./useSignIn";
const useSignUp = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState(null);
  // {error: false,…}
  // data
  // :
  // {id: 2, email: "timbetekanem@gmail.com", username: "admintimbet", fullName: "TIMBET EKANEM",…}
  // createdAt
  // :
  // "12/15/2022 10:42:19"
  // email
  // :
  // "timbetekanem@gmail.com"
  // emailVerified
  // :
  // false
  // emailVerifiedAt
  // :
  // null
  // fullName
  // :
  // "TIMBET EKANEM"
  // id
  // :
  // 2
  // status
  // :
  // false
  // username
  // :
  // "admintimbet"
  // error
  // :
  // false
  // message
  // :
  // "Your TexasBully account has been created successfully, kindly verify your account by following the link in the mail sent to you
  const signUp = async (signUpData) => {
    setIsLoading(true);
    try {
      const res = await AuthService.signUp(signUpData);

      // const { data } = res;

      if (res?.error === false) {
        success(res?.message, { autoClose: 10000 });
        setIsLoading(false);
        navigate("/login");
      } else {
        errorToast(res?.message || "An Error has Occured");
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error, "eror");
      errorToast(error.message ? error.message : "An Error has Occured");
    }
  };

  return { isLoading, error, signUp };
};

export default useSignUp;

// import { useState, useEffect } from "react";
// import AuthService from "../services/user";

// const useFetchUser = () => {
//     const [isLoading, setIsLoading] = useState(false);
//     const [isAborted, setIsAborted] = useState(false);
//     const [error, setError] = useState(null);

//     const signIn = async (data) => {
//       setIsLoading(true);
//       setError(null);
  
//       try {
//         const res = await AuthService.register(data);

  
        
//       } catch (error) {
//         setIsLoading(false);
//         // errorToast(error.message);
  
//         if (!isAborted) {
//           console.log(error, "error");
//           setIsLoading(false);
//           if (error.response.status === 404) {
//           //   warning("Email or Password is incorrect");
//           // } else {
//           //   warning("Error signing in");
//           // }
//         }
//       }
//     };
//     useEffect(() => {
//       return () => {
//         setIsAborted(true);
//       };
//     }, []);
  
//     return { isLoading, error, signIn };
// }

// export default useFetchUser;
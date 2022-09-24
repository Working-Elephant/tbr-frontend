import { errorToast } from "../components/shared";
import AuthService from "../services/user";

export const checkToken = (res) => {
    if (res.status === 401) {
        console.log('ran', res.status)
      errorToast(res.statusText);
      return AuthService.logout();
    }
    return;
  };
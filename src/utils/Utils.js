import { errorToast } from "../components/shared";
import AuthService from "../services/user";

export const checkToken = (res) => {
  if (res.status === 401) {
    errorToast(res.statusText);
    return AuthService.logout();
  }
  return;
};

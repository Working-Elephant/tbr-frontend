import { errorToast } from "../components/shared";
import AuthService from "../services/user";

export const checkToken = (res) => {
  if (res.status === 401) {
    errorToast(res.statusText);
    return AuthService.logout();
  }
  return;
};

//Function that returns the first or first two letters from a name
export const findUpper = (string) => {
  let extractedString = [];

  for (var i = 0; i < string.length; i++) {
    if (
      string.charAt(i) === string.charAt(i).toUpperCase() &&
      string.charAt(i) !== " "
    ) {
      extractedString.push(string.charAt(i));
    }
  }
  if (extractedString.length > 1) {
    return extractedString[0] + extractedString[1];
  } else {
    return extractedString[0];
  }
};

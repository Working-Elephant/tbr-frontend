// Import Dependency
import { toast } from "react-toastify";

// Import Styling
import "react-toastify/dist/ReactToastify.css";

toast.configure({
  autoClose: 3000,
  draggable: true,
  hideProgressBar: true,
  position: toast.POSITION.TOP_RIGHT,
  theme: "light",
});

export function warning(string) {
  toast.warning(string);
}

export function errorToast(string) {
  toast.error(string);
}

export function success(string) {
  toast.success(string);
}

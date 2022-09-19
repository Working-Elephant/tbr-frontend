// Import Dependency
import { toast } from "react-toastify";

// Import Styling
import "react-toastify/dist/ReactToastify.css";


const config = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  // progress: undefined,
  }

export function warning(string) {
  toast.warning(string, config);
}

export function errorToast(string) {
  toast.error(string, config);
}

export function success(string) {
  toast.success(string, config);
}

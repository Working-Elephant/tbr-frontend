import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { injectStore } from "./config/axios";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
injectStore(store);
const root = ReactDOM.createRoot(document.getElementById("root"));
const initialOptions = {
  "client-id": "test",
  currency: "USD",
  intent: "capture",
  "data-client-token": "abc123xyz==",
};
root.render(
  <Provider store={store}>
    <PayPalScriptProvider
      options={{
        "client-id":
          "AWslNDZobMrXkcNvoUCkrHrdWM3VlFgDv7X3kEmrTAtfiEyXVUa3vBYWNjmdZanuC-P9jEYcxgtBMo8e",
        components: "buttons",
        currency: "USD",
      }}
    >
      <BrowserRouter>
        <App />
        <ToastContainer newestOnTop />
      </BrowserRouter>
    </PayPalScriptProvider>
  </Provider>
);

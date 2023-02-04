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
import { AdsContextProvider } from "./context/AdsContext";
injectStore(store);
const testClientID = import.meta.env.VITE_PAYPAL_TEST_CLIENT_ID;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <AdsContextProvider>
      <PayPalScriptProvider
        options={{
          "client-id": { testClientID },
          components: "buttons",
          currency: "USD",
        }}
      >
        <BrowserRouter>
          <App />
          <ToastContainer newestOnTop />
        </BrowserRouter>
      </PayPalScriptProvider>
    </AdsContextProvider>
  </Provider>
);

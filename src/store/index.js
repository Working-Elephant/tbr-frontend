import { configureStore } from "@reduxjs/toolkit";
import auth from "./features/authSlice";
import product from "./features/productSlice"

const store = configureStore({
  reducer: {
    auth,product
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
});

export default store;

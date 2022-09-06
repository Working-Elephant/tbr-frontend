import { configureStore } from "@reduxjs/toolkit";
import auth from "./features/authSlice";

const store = configureStore({
  reducer: {
    auth,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./Features/counterSlice";
import { baseApi } from "./api/api";

const Store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    counter: counterSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export default Store;

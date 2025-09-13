import { configureStore } from "@reduxjs/toolkit";
import { smartplugApi } from "./api/smartPlugApi";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [smartplugApi.reducerPath]: smartplugApi.reducer,
  },
  middleware: (getDefault) => getDefault().concat(smartplugApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

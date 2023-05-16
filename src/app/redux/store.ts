"use client";

import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "@/app/redux/slices/counter-slice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

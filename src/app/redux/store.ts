"use client";

import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "@/app/redux/slices/counter-slice";
import userSlice from "@/app/redux/slices/user-slice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    user: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

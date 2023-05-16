"use client";

import { Provider as ReduxProvider } from "react-redux";
import { store } from "@/app/redux/store";
import { ReactNode } from "react";

const Provider = ({ children }: { children: ReactNode }) => {
  return <ReduxProvider store={store}>{children}</ReduxProvider>;
};

export default Provider;

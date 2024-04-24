"use client";

import { Provider } from "react-redux";
import { persistor, store } from "./store";
import { PersistConfig, persistStore } from "redux-persist";
import { RootState } from "@reduxjs/toolkit/query";
// import { localStorage } from "redux-persist/es/storage";
import { PersistGate } from "redux-persist/integration/react";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}

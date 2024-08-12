import { configureStore } from "@reduxjs/toolkit";
import wsReducer from "./websocket/wsSlice";
import contributionsReducer from './contributions/contributiosSlice'

export const store = configureStore({
  reducer: {
    ws: wsReducer,
    contributions: contributionsReducer
  },
});
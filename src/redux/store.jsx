import { configureStore } from "@reduxjs/toolkit";
import wsReducer from "./websocket/wsSlice";
import contributionsReducer from './contributions/contributiosSlice'
import sectionReducer from './sections/sectionSlice'

export const store = configureStore({
  reducer: {
    ws: wsReducer,
    contributions: contributionsReducer,
    section: sectionReducer
  },
});
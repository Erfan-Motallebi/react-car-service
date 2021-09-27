import { createStore, applyMiddleware } from "@reduxjs/toolkit";
import ThunkMiddleware from "redux-thunk";
import { reducers } from "./Redux/reducers";

export const store = createStore(reducers, applyMiddleware(ThunkMiddleware));

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

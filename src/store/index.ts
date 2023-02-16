import { configureStore } from "@reduxjs/toolkit";
import authenticationSlice from "./counter";
import counterSlice from "./authentication";

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    authentication: authenticationSlice.reducer,
  },
});

export const counterActions = counterSlice.actions;
export const authenticationActions = authenticationSlice.actions;

export default store;

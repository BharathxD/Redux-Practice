import { createSlice, PayloadAction, configureStore } from "@reduxjs/toolkit";
import {
  ICounterReducerState,
  ICounterReducerAction,
} from "../types/state.types";

const initialCounterState: ICounterReducerState = {
  counter: 0,
  showCounter: true,
};
const initialAuthState = { isAuthenticated: false };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action: PayloadAction<ICounterReducerAction>) {
      state.counter += action.payload.amount;
    },
    toogleCounter(state) {
      state.showCounter = !state.showCounter;
    },
    resetCounter(state) {
      state.counter -= state.counter;
    },
  },
});

const authenticationSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    authentication: authenticationSlice.reducer
  },
});

export const counterActions = counterSlice.actions;
export const authenticationActions = authenticationSlice.actions;

export default store;

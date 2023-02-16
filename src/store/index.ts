import { createSlice, PayloadAction, configureStore } from "@reduxjs/toolkit";
import {
  ICounterReducerState,
  ICounterReducerAction,
} from "../types/state.types";

const initialState: ICounterReducerState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState,
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
    }
  },
});

const store = configureStore({
    reducer: counterSlice.reducer
});

export const counterActions = counterSlice.actions;

export default store;

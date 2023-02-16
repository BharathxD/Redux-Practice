import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICounterReducerAction } from "../types/state.types";

const initialCounterState = {
  counter: 0,
  showCounter: true,
};

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

export default counterSlice;

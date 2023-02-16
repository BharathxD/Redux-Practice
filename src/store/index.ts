import { createStore } from "redux";

interface ICounterReducerAction {
  type: string;
}

interface IActionReducerState {
  counter: number;
}

const counterReducer = (
  state: IActionReducerState = { counter: 0 },
  action: ICounterReducerAction
) => {
  if (action.type === "INCREMENT") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "DECREMENT") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;
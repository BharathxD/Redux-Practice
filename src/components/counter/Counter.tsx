import React from "react";
import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { ICounterReducerState } from "../../types/state.types";
import { counterActions } from "../../store";

const Counter: React.FC = () => {
  const counter = useSelector(
    (state: ICounterReducerState) => state.counter.counter
  );
  const showCounter = useSelector(
    (state: ICounterReducerState) => state.counter.showCounter
  );
  const dispatch = useDispatch();
  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const increaseHandler = () => {
    dispatch(
      counterActions.increase({
        amount: 10,
      })
    );
  };
  const toggleCounterHandler = () => {
    dispatch(counterActions.toogleCounter());
  };
  const resetCounterHandler = () => {
    dispatch(counterActions.resetCounter());
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{showCounter && counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increaseHandler}>Increase by 10</button>
        <button onClick={resetCounterHandler}>Reset</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

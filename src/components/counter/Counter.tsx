import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import IActionReducerState from "../../types/state.types";
import { CounterReducerEnum } from "../../types/state.types";

const Counter: React.FC = () => {
  const counter = useSelector((state: IActionReducerState) => state.counter);
  const dispatch = useDispatch();
  const incrementHandler = () => {
    dispatch({ type: CounterReducerEnum.INCREMENT });
  };
  const decrementHandler = () => {
    dispatch({ type: CounterReducerEnum.DECREMENT  });
  };
  const toggleCounterHandler = () => {};
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

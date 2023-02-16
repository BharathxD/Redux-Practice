export default interface IActionReducerState {
  counter: number;
}

export const enum CounterReducerEnum{
    INCREMENT = "INCREMENT",
    DECREMENT = "DECREMENT"
}
export interface IActionReducerState {
  counter: number;
  showCounter: boolean;
}

export interface ICounterReducerAction {
  type: string;
  amount: number;
}


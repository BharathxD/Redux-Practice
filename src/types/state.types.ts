export interface ICounterReducerState {
  counter: { counter: number; showCounter: boolean };
}

export interface ICounterReducerAction {
  type: string;
  amount: number;
}

export interface IAuthenticationReducerState {
  authentication: { isAuthenticated: boolean };
}

export interface IAuthenticationReducerAction {
  type: string;
  isAuthenticated: boolean;
}

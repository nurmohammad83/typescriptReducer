export interface IInitialState {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  count: number;
  terms: boolean;
}

export type AppAction = AppCount | AppInput;
export interface AppInput {
  type: "INPUT" | "TOGGLE";
  payload?: { name: string; value: string };
}
export interface AppCount {
  type: "INCREMENT" | "DECREMENT";
  payload: number;
}

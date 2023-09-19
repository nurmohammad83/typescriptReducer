export interface IInitialState {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  count: number;
  terms: boolean;
}

export interface AppAction {
  type: "INPUT" | "TOGGLE" | "INCREMENT" | "DECREMENT";
  payload?: { name: string; value: string } | undefined;
}

export interface CountProp {
  count: number;
}

export const initialState: CountProp = {
  count: 0,
};

export interface countAction {
  type: string;
  payload: CountProp;
}

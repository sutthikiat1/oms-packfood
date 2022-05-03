export interface UserProp {
  email: string;
  token: string;
  role: string;
}

export const initialState: UserProp = {
  email: "",
  token: "",
  role: "user",
};

export interface UserAction {
  type: string;
  payload: UserProp;
}

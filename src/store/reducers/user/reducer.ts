import { UserProp, initialState, UserAction } from "./type";
import { SET_USER, RESET_USER } from "./action";

const reducer = (state: UserProp = initialState, action: UserAction) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, ...action.payload };
    case RESET_USER:
      return initialState;
    default:
      return state;
  }
};

export default reducer;

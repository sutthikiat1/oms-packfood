import { CountProp, initialState, countAction } from "./type";
import { SET_COUNT, RESET_COUNT } from "./action";

const reducer = (state: CountProp = initialState, action: countAction) => {
  switch (action.type) {
    case SET_COUNT:
      return { ...state, ...action.payload };
    case RESET_COUNT:
      return initialState;
    default:
      return state;
  }
};

export default reducer;

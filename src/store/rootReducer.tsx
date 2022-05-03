import { combineReducers } from "redux";
import user from "./reducers/user/reducer";
import count from "./reducers/count/reducer";

const rootReducer = combineReducers({
  user,
  count,
});

export default rootReducer;

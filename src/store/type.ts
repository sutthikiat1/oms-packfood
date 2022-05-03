import { UserProp } from "./reducers/user/type";
import { CountProp } from "./reducers/count/type";

export default interface typeStore {
  user: UserProp;
  count: CountProp;
}

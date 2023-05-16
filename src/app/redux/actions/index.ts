import { counterActions } from "@/app/redux/slices/counter-slice";
import { userActions } from "@/app/redux/slices/user-slice";

const actions = {
  counter: counterActions,
  user: userActions,
};

export default actions;

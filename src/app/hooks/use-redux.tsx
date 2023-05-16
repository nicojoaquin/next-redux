import actions from "@/app/redux/actions";
import { RootState } from "@/app/redux/store";
import { useDispatch, useSelector } from "react-redux";

const useRedux = <R extends keyof RootState>(reducer: R) => {
  const state = useSelector<RootState, RootState[R]>((state) => state[reducer]);
  const dispatch = useDispatch();

  return {
    state,
    dispatch,
    actions: actions[reducer],
  };
};

export default useRedux;

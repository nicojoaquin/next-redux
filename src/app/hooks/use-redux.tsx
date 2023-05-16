import actions from "@/app/redux/actions";
import { RootState } from "@/app/redux/store";
import { useDispatch, useSelector } from "react-redux";

const useRedux = (reducer: keyof RootState) => {
  const state = useSelector((state: RootState) => state[reducer]);
  const dispatch = useDispatch();

  return { state, dispatch, actions: actions[reducer] };
};

export default useRedux;

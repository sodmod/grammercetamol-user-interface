import {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setAllAppKeys} from "../../config/app.slice";

const useFieldChange = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return state.app;
  });

  const onFieldChange = useCallback(
    (key, value) => {
      dispatch(
        setAllAppKeys({
          ...state,
          request: {
            ...state.request,
            [key]: value,
          },
        })
      );
    },
    [dispatch, state]
  );

  return {
    onFieldChange,
    state
  };
};

export default useFieldChange;

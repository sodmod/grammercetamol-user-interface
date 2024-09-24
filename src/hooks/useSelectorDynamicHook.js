import {useSelector} from "react-redux"

/**
 * useSelector dynamically used with method overloading
 **/
export const useSelectorDynamicHook = ({key}) => {
  return useSelector(state => {
    if(key !== null)
      return state.app[key];
    return state.app;
  });
};
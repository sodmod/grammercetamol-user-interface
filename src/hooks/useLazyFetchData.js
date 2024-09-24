import {useSelector} from "react-redux";
import {useLazyFetchDataQuery} from "../config";
import PropTypes from "prop-types";
import {useCallback, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {routePath} from "../utils/constants.js";

// lazy fetch data hook
const useLazyFetchData = () => {
  const state = useSelector((state) => {
    return state.app;
  });
  const navigate = useNavigate();

  const [
    trigger,
    {
      data,
      isError,
      error,
      isFetching,
      isLoading,
      isSuccess
    }] = useLazyFetchDataQuery()

  // onFetchData function
  const onFetchData = useCallback((getUrl) => {

    // call the trigger function to trigger the api call
    trigger({
      ...state,
      getUrl,
    });
  }, [state, trigger])


  useEffect(() => {
    if((!isLoading || !isFetching) && isError){
      if(error?.status === 401){
        return navigate(routePath.auth.login);
      }
    }
  }, [error, isError, isFetching, isLoading, navigate]);

  return {
    onFetchData,
    data: data?.data,
    isFetching,
    isLoading,
    isSuccess,
  }

}

export default useLazyFetchData


useLazyFetchDataQuery.prototype = {
  getUrl: PropTypes.string.isRequired,
};

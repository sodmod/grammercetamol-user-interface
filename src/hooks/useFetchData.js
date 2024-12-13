import {useCallback, useEffect} from "react";
import {useSelector} from "react-redux";
import {useFetchDataQuery} from "../config";
import {useNavigate} from "react-router-dom";
import {routePath} from "../utils/constants.js";

const useFetchData = (getUrl) => {

  const navigate = useNavigate();

  const state = useSelector((state) => {
    return state.app;
  });

  // call fetch data query
  const {data, isError, isLoading, isFetching,} =
    useFetchDataQuery({
      ...state,
      getUrl,
    });

  // call fetch data
  const onFetchData = useCallback(() => {
    if(isError || data?.responseCode !== 200 && data?.responseCode === 401) {
      // onRefreshToken(refetch())
      // message.error(
      //   error?.data?.responseMessage ??
      //   data?.responseMessage ??
      //   "Something Went Wrong Try again later"
      // );

      return navigate(routePath.auth.login, {
        replace: true,
      })
    }

  }, [data?.responseCode, isError, navigate]);

  // const {onRefreshToken, result} = useRefreshToken();

  useEffect(() => {
    onFetchData();
    // onRefreshToken(refetch);
  }, [onFetchData]);

  return {
    code: data?.responseCode,
    data: data?.data,
    loading: isLoading || isFetching,
    message: data?.responseMessage,
  };
};

export default useFetchData;

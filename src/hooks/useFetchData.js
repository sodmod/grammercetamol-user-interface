import {useCallback, useEffect} from "react";
import {useSelector} from "react-redux";
import {useFetchDataQuery} from "../config";
import useRefreshToken from "./auth-hook/useRefreshToken";

const useFetchData = (getUrl) => {
  const state = useSelector((state) => {
    return state.app;
  });

  const {data, isError, error, isLoading, isFetching, refetch,} =
    useFetchDataQuery({
      ...state,
      getUrl,
    });


  const onFetchData = useCallback(() => {
    if(isError || data?.responseCode !== 200) {
      // message.error(
      //   error?.data?.responseMessage ??
      //   data?.responseMessage ??
      //   "Something Went Wrong Try again later"
      // );
    }

  }, [data, error?.data, isError,]);

  const {onRefreshToken, result} = useRefreshToken();

  useEffect(() => {
    onFetchData();
    onRefreshToken(refetch);
  }, [onFetchData, onRefreshToken, refetch]);

  return {
    code: data?.responseCode,
    data: data?.data,
    loading: isLoading || isFetching || result.isLoading,
    message: data?.responseMessage,
  };
};

export default useFetchData;

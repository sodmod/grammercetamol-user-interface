import {useCallback} from "react";
import {useSelector} from "react-redux";
import {setAppKey, store, useFetchDataQuery} from "../../config";
import {endpoints} from "../../store/endpoints";
import useRefreshToken from "./useRefreshToken";
// import useRefreshToken from "./useRefreshToken";

const useAuthenticateToken = () => {
  const state = useSelector((state) => {
    return state.app;
  });

  const {isError, data, refetch} = useFetchDataQuery({
    ...state,
    getUrl: endpoints.auth["confirm-token"],
  });

  const {onRefreshToken} = useRefreshToken(refetch);

  const onAuthenticateToken = useCallback(() => {
    if(data?.data?.responseCode !== 200 || isError) {
      onRefreshToken();
      store.dispatch(
        setAppKey({
          key: "isTokenExpired",
          value: true,
        })
      );
      return false;
    }
    store.dispatch(
      setAppKey({
        key: "isTokenExpired",
        value: false,
      })
    );
    return true;
  }, [data?.data?.responseCode, isError, onRefreshToken]);

  return {onAuthenticateToken};
};

export default useAuthenticateToken;
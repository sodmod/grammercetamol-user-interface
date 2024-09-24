import {useNavigate} from "react-router-dom";
import {useCallback} from "react";
import {useSelector} from "react-redux";
import {setAppKey, store, useRefreshTokenMutation} from "../../config";
import {removeKeyFromCookie, removeKeyFromLocalStorage, setCookie,} from "../../store/storage";
import {routePath} from "../../utils/constants";

function useRefreshToken(){
  const navigate = useNavigate();

  const [refreshToken, result] = useRefreshTokenMutation();

  const state = useSelector((state) => {
    return state.app;
  });

  const onRefreshToken = useCallback(async(refetch) => {
    if(state.isTokenExpired) {

      try {
        const response = await refreshToken(refetch);
        if(response.data?.responseCode === 200) {
          setCookie(
            "***",
            `${response?.data?.data?.type} ${response?.data?.data?.token}`
          );
          store.dispatch(
            setAppKey({
              key: "isTokenExpired",
              value: false,
            })
          );
          setTimeout(() => {
            refetch();
          }, 500);
        }else {
          // message.error(response?.data?.data?.responseMessage);
          removeKeyFromCookie("*");
          removeKeyFromLocalStorage("**");
          removeKeyFromCookie("***");
          removeKeyFromCookie("****");

          setTimeout(() => {
            return navigate(routePath.auth.login);
          }, 2000);
        }
      }catch(error) {
        console.log(error);
        // message.error("Something went wrong try again later");
      }
    }
  }, [navigate, refreshToken, state.isTokenExpired]);

  return {onRefreshToken, result};
}

export default useRefreshToken;

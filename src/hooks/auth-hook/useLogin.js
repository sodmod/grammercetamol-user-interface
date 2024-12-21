// inbuilt libraries
import {message} from "antd";
import {useCallback} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

// custom function
import {endpoints} from "../../store/endpoints";
import {routePath, time} from "../../utils/constants";
import {setAllAppKeys, useMutateMutation} from "../../config";
import {setCookie, userInfoToLowerCase,} from "../../store/storage";


// log in hook
const useLogin = () => {

  // state selector
  const state = useSelector((state) => {
    return state.app;
  });

  // call dispatch
  const dispatch = useDispatch();

  // navigation hook
  const navigate = useNavigate();

  // mutation function
  const [mutate, result] = useMutateMutation();

  // login function
  const onLogin = useCallback(async(e) => {
    // prevent form default action
    e.preventDefault();

    try {

      // email api call
      const response = await mutate({
        ...state,
        postUrl: endpoints.auth.login,
        formMethod: "POST",
        request: {
          username: state?.request?.email,
          password: state?.request?.password,
        },
      });

      // response ok
      if(!response.error) {
        // save
        setCookie("*", true, time.auth.loggedIn);

        // save user data to cookie
        setCookie("**", JSON.stringify(userInfoToLowerCase(response?.data?.data)), time.auth["refresh-token"]);

        // save token
        setCookie(
          "***",
          `${response?.data?.data?.type} ${response?.data?.data?.token}`,
          time.auth["token-time"]
        );

        // save refresh token
        setCookie(
          "****",
          response.data?.data?.refreshToken,
          time.auth["refresh-token"]
        );
        setCookie("profile_pics", response.data?.data?.profilePics, time.auth['token-time']);

        // change state object
        dispatch(setAllAppKeys({
          ...state,
          isLoggedIn: true,
          response: {}
        }));

        message.success("successfully logged in");

        // timeout to redirect
        setTimeout(() => {
          return navigate(`/${routePath.dashboard}`, {
            replace: true,
          });
        }, 1500);
      }else {
        message.error("Error fetching data, please check your connection")
      }

    }catch(error) {
      console.log(error);
      console.log("Something went rong");
    }
  }, [dispatch, mutate, navigate, state]);

  return {onLogin, result};
};

export default useLogin;

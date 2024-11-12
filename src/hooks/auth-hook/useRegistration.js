// inbuilt libraries
import {message} from "antd";
import {useCallback} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

// custom functions
import {routePath} from "../../utils/constants";
import {endpoints} from "../../store/endpoints";
import {setAppKey, useMutateMutation} from "../../config";

// registration hook
const useRegistration = () => {
  const dispatch = useDispatch();

  // state selector
  const state = useSelector((state) => {
    return state.app;
  });

  // declare navigation instance
  const navigate = useNavigate();

  // call mutation function
  const [mutate, result] = useMutateMutation();

  // on registration function
  const onRegister = useCallback(async(e) => {
    // prevents default form action
    e.preventDefault();

    // try and catch block
    try {
      const response = await mutate({
        ...state,
        postUrl: endpoints.auth.register,
        formMethod: "POST",
        request: {
          firstName: state?.request?.firstname,
          lastName: state?.request?.lastname,
          otherName: state?.request?.othername,
          email: state?.request?.email,
          phoneNumber: state?.request?.phoneNumber,
          password: state?.request?.password,
          role: "STUDENTS",
        },
      });

      // if response is not 200
      if(response.data?.responseCode !== 200) {
        message.error(
          response.data?.responseMessage
            ? `${response.data.responseMessage}: User ${state?.request?.email} already exists`
            : "An error occurred"
        );
      }else { // if response is 200
        message.success(`${response.data?.responseMessage}: User registered successfully congratulations!`);
        setTimeout(() => {
          dispatch(setAppKey({key: "request", value: {}}));
          return navigate(routePath.auth.login, {
            replace: true,
          });
        }, 2000);
      }
      // catch error
    }catch(error) {
      message.error(`An error occurred: ${error.message}`);
    }
  }, [dispatch, mutate, navigate, state]);

  // return onRegister function and result
  return {onRegister, result};
};

export default useRegistration

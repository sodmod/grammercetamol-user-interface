import {useSelector} from "react-redux";
import {useMutateMutation} from "../../config";
import {useNavigate} from "react-router-dom";
import {useCallback} from "react";
import {endpoints} from "../../store/endpoints";
import {routePath} from "../../utils/constants";
import {message} from "antd";

const useRegistration = () => {
  const state = useSelector((state) => {
    return state.app;
  });

  const [mutate, result] = useMutateMutation();
  const navigate = useNavigate();

  const onRegister = useCallback(async() => {
    try {
      const response = await mutate({
        ...state,
        postUrl: endpoints.auth.register,
        formMethod: "POST",
        request: {
          firstName: state.request?.firstname,
          lastName: state.request?.lastname,
          otherName: state.request?.othername,
          email: state.request?.email,
          phoneNumber: state.request?.phoneNumber,
          password: state.request?.password,
          role: "STUDENTS",
        },
      });
      if(response.data?.responseCode !== 200) {
        message.error(`${response.data?.responseMessage}: User ${state.request?.email} already Exist` || "An error occurred");
      }else {
        message.success(`${response.data?.responseMessage}: User registered successfully congratulations!`);
        setTimeout(() => {
          return navigate(routePath.auth.login, {
            replace: true,
          });
        }, 2000);
      }
    }catch(error) {
      message.error("An error occurred");
    }
  }, [mutate, navigate, state]);


  return {onRegister, result};
};

export default useRegistration
import {useCallback, useRef} from "react";
import {useSelector} from "react-redux";
import {endpoints} from "../store/endpoints";
import {useFormDataMutation} from "../config";
import {message} from "antd";
import {useNavigate} from "react-router-dom";
import {routePath} from "../utils/constants.js";
import {setCookie} from "../store/storage.js";

/**
 * useFormData hook sends any multipart data
 */
const useProfileUpdate = ({url, }) => {

  let messageRef = useRef(null);
  const [mutate, result] = useFormDataMutation();

  // navigation hook
  const navigate = useNavigate();


  // initiate refreshToken hook
  // const {onRefreshToken, result: refreshTokenResult} = useRefreshToken();

  // call app states
  const state = useSelector((state) => {
    return state.app;
  });


  // on submit function to make the api call
  const onSubmit = useCallback(
    async({fileDetails}) => {
      try {
        const formData = new FormData();

        // append file and its details
        Object.keys(fileDetails).forEach((key) => {
          formData.append(key, fileDetails[key]);
          console.log(formData.get(key))
        });

        // call mutate function
        const response = mutate({
          ...state,
          postUrl: url,
          formMethod: "POST",
          request: formData,
        });

        // handle response data
        if(!response?.error) {
          message.success("profile updated successfully");
          window.location.reload();
          // timeout to redirect
          setTimeout(() => {
            return navigate(`/${routePath.profile.index}`, {
              replace: true,
            });
          }, 1500);
        }else if(response?.error?.data?.status === 401) {
          message.error("authentication error, please login")
          // timeout to redirect
          setTimeout(() => {
            return navigate(`/${routePath.auth.login}`, {
              replace: true,
            });
          }, 1500);

        }else if(
          response?.data?.data?.responseCode === 500 &&
          response?.data.data.responseCode !== 200
        ) {
          // todo handle error processing logic
          messageRef.current = response?.data?.data?.responseMessage
          message.error("please contact the customer service");
        }
      }catch(error) {
        console.error("Error is there:", error);
      }
    },
    [mutate, navigate, state]
  );

  return {
    onSubmit,
    loading: result.isLoading,
    message: messageRef.current
  };
};

export default useProfileUpdate;

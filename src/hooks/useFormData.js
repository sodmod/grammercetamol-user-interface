import {useCallback, useRef} from "react";
import {useSelector} from "react-redux";
import {endpoints} from "../store/endpoints";
import {useFormDataMutation} from "../config";
import useRefreshToken from "./auth-hook/useRefreshToken";

/**
 * useFormData hook sends any multipart data
 */
const useFormData = () => {

  let messageRef = useRef(null);
  const [mutate, result] = useFormDataMutation();

  // initiate refreshToken hook
  const {onRefreshToken, result: refreshTokenResult} = useRefreshToken();

  // call app states
  const state = useSelector((state) => {
    return state.app;
  });


  // on submit function to make the api call
  const onSubmit = useCallback(
    async({files, fileDetails}) => {
      try {
        const formData = new FormData();

        // append file and its details
        files.forEach((file) => {
          formData.append("files", file);
        });
        Object.keys(fileDetails).forEach((key) => {
          formData.append(key, fileDetails[key]);
        });

        // call mutate function
        const response = mutate({
          ...state,
          postUrl: endpoints.courses.courses,
          formMethod: "POST",
          request: formData,
        });

        // handle response data
        if(response?.error?.data?.status === 401) {

          // call freshToken response to if
          await onRefreshToken(onSubmit);

        }else if(
          response?.data?.data?.responseCode === 500 &&
          response?.data.data.responseCode !== 200
        ) {
          // todo handle error processing logic
          messageRef.current = response?.data?.data?.responseMessage
        }
      }catch(error) {
        console.error("Error is there:", error);
      }
    },
    [mutate, onRefreshToken, state]
  );

  return {
    onSubmit,
    loading: result.isLoading || refreshTokenResult.isLoading,
    message: messageRef.current
  };
};

export default useFormData;
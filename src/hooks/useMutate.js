import {useSelector} from "react-redux";
import {useMutateMutation} from "../config";
import {useCallback} from "react";
import PropTypes from "prop-types";
import useRefreshToken from "./auth-hook/useRefreshToken";
// import {message} from "antd";

const useMutate = ({postUrl, formMethod}) => {

  const [mutate, result] = useMutateMutation();
  const {onRefreshToken, result: result1} = useRefreshToken();

  const state = useSelector((state) => {
    return state.app;
  });

  const onCall = useCallback(async({request}) => {

    try {
      const response = await mutate({
        ...state,
        postUrl,
        formMethod,
        request
      });
      if(response.error) {
        onRefreshToken(onCall);
      }
    }catch(error) {
    }
  }, [formMethod, mutate, onRefreshToken, postUrl, state]);

  return {
    onCall,
    isLoading: result.isLoading || result1.isLoading,
    data: result.data
  };
};

useMutate.propTypes = {
  postUrl: PropTypes.string.isRequired, // Specify that postUrl should be string
  formMethod: PropTypes.string.isRequired, // Specify that method should be string
  request: PropTypes.object, // Specify that request should either be an object or null
};

export default useMutate;

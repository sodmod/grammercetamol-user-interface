import {useMutateMutation} from "../../config";
import {useCallback} from "react";
import {endpoints} from "../../store/endpoints";
import {useSelector} from "react-redux";

const usePaystack = ({email, amount}) => {

  const [mutate, result] = useMutateMutation();

  const state = useSelector((state) => {
    return state.app;
  });

  const onCall = useCallback(async() => {

    try {
      const response = await mutate({
        ...state,
        postUrl: endpoints.transaction.paystack.initiate,
        formMethod: "POST",
        request: {
          email,
          amount
        },
      });

      if(response.data.responseCode === 200 && response.data.data) {
        return {reference: response.data.data.reference};
      }
    }catch(e) {

    }


  }, [mutate, state])

  return {
    onCall,
    isLoading: result.isLoading
  }

}

export default usePaystack;
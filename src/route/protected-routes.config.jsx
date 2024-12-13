import {getCookie} from "../store/storage.js";
import {Navigate} from "react-router-dom";
import {routePath} from "../utils/constants.js";

// eslint-disable-next-line react/prop-types
export const ProtectedRoute = ({children}) => {

  if(
    !getCookie("*") &&
    !getCookie("***")
  ) {
    return <Navigate to={routePath.auth.login} replace/>;
  }
  return <>{children}</>
}

// inbuilt libraries
import {NavLink} from "react-router-dom";

import useLogin from "../../hooks/auth-hook/useLogin";
import useFieldChange from "../../hooks/input-hook/useFieldChange";

import {routePath} from "../../utils/constants.js";

// login page
const Login = () => {
  const {onFieldChange, state} = useFieldChange();

  const {onLogin, result} = useLogin();

  // jsx
  return (
    <>
    <section className="form-container">
      <form onSubmit={onLogin} encType="multipart/form-data">
        <h3>login now</h3>

        {/*email input field*/}
        <p>your email <span>*</span></p>
        <input
          type="email"
          name="email"
          value={state.request?.email || ""}
          placeholder="enter your email"
          required
          maxLength="50"
          className="box"
          onChange={(e) => {
            onFieldChange("email", e.target.value)
          }}
        />

        {/*password input field*/}
        <p>your password <span>*</span></p>
        <input
          type="password"
          name="pass"
          value={state.request?.password || ""}
          placeholder="enter your password"
          required
          maxLength="20"
          className="box"
          onChange={(e) => {
            onFieldChange("password", e.target.value)
          }}
        />

        {/*submit button*/}
        <button type="submit" name="submit" className="btn">{result.isLoading ? "Processing" : "Login"}</button>

        <p style={{textAlign: "center"}}>Dont have an account?{" "}
          <NavLink to={routePath.auth.register} style={{textDecoration: "none", width: "100%"}}>
            Sign up
          </NavLink>
        </p>
      </form>

    </section>
    </>
  );
};
export default Login;

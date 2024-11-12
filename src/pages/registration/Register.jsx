// inbuilt libraries
import {NavLink} from "react-router-dom";

// custom functions
import useFieldChange from "../../hooks/input-hook/useFieldChange";
import useRegistration from "../../hooks/auth-hook/useRegistration";

import {routePath} from "../../utils/constants.js";

// register component
const Register = () => {
  const {onFieldChange, state} = useFieldChange();
  const {onRegister, result} = useRegistration();

  // jsx
  return (
    <section className="form-container">
      <form onSubmit={onRegister}>
        <h3>register now</h3>

        {/*first name input*/}
        <p>your first name <span>*</span></p>
        <input
          type="text"
          name="firstname"
          placeholder="enter your firstname"
          required
          value={state.request?.firstname || ""}
          maxLength="50"
          className="box"
          onChange={(e) => {
            onFieldChange("firstname", e.target.value)
          }}
        />
        {/* last name input*/}
        <p>your last name <span>*</span></p>
        <input
          type="text"
          name="lastname"
          placeholder="enter your name"
          required
          value={state.request?.lastname || ""}
          maxLength="50"
          className="box"
          onChange={(e) => {
            onFieldChange("lastname", e.target.value)
          }}
        />

        {/* other name input*/}
        <p>your other name <span>*</span></p>
        <input
          type="text"
          name="othername"
          placeholder="other name"
          required
          value={state.request?.othername || ""}
          maxLength="50"
          className="box"
          onChange={(e) => {
            onFieldChange("othername", e.target.value)
          }}
        />

        {/* email input */}
        <p>your email <span>*</span></p>
        <input
          type="email"
          name="email"
          value={state.request?.email || ""}
          placeholder="enter your email"
          required maxLength="50"
          className="box"
          onChange={(e) => {
            onFieldChange("email", e.target.value)
          }}
        />

        {/* phone number input */}
        <p>your number <span>*</span></p>
        <input
          type="number"
          name="number"
          value={state.request?.phoneNumber || ""}
          placeholder="enter your ,mobile number"
          required maxLength="50"
          className="box"
          onChange={(e) => {
            onFieldChange("phoneNumber", e.target.value)
          }}
        />

        {/*password input*/}
        <p>your password <span>*</span></p>
        <input
          type="password"
          name="pass"
          value={state.request?.password || ""}
          placeholder="enter your password"
          required maxLength="20"
          className="box"
          onChange={(e) => {
            onFieldChange("password", e.target.value)
          }}
        />

        {/*confirm password input*/}
        <p>confirm password <span>*</span></p>
        <input
          type="password"
          name="c_pass"
          value={state.request?.confirm_password || ""}
          placeholder="confirm your password"
          required maxLength="20"
          className="box"
          onChange={(e) => {
            onFieldChange("confirm_password", e.target.value)
          }}
        />

        {/*submit button*/}
        <button
          type="submit"
          value="register new"
          name="submit"
          className="btn">
          {result.isLoading ? "Registering..." : "Register"}
        </button>

        <p style={{textAlign: "center"}}>Already have an account?{" "}
          <NavLink to={routePath.auth.login} style={{textDecoration: "none", width: "100%"}}>
            Login
          </NavLink>
        </p>
      </form>

    </section>
  );
};

export default Register;

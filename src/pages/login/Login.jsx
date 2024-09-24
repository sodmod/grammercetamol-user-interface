import {Button, Form, Input} from "antd";
import {Link} from "react-router-dom";

import useLogin from "../../hooks/auth-hook/useLogin";
import useFieldChange from "../../hooks/input-hook/useFieldChange";
import {routePath} from "../../utils/constants";

import styles from "./Login.module.css";


const Login = () => {
  const {onFieldChange, state} = useFieldChange();

  const {onLogin, result} = useLogin();
  return (
    <section className={styles.section}>
      <div className={styles.center}>
        <div className={styles.form}>
          <div className={styles.form_}>
            <Link to={routePath.landpage}>
              <img src="../../assets/images/logo.png" alt="" className={styles.logo}/>
            </Link>

            <h3 className={styles.h3}>SIGN IN</h3>
            <h3 className={styles.h4}>SignIn to Continue Your Application</h3>
            <Form
              className="login-form"
              onFinish={onLogin}
              layout="vertical"
              labelCol={{
                span: 24,
              }}
              wrapperCol={{
                span: 24,
              }}
              initialValues={{
                remember: true,
              }}
              autoComplete="on"
              fields={[
                {
                  name: "email",
                  value: state.request.email,
                },
                {
                  name: "password",
                  value: state.request.password,
                },
              ]}
            >
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                  },
                  {
                    type: "email",
                    message: "invalid email",
                  },
                ]}
              >
                <Input
                  onChange={(e) => {
                    onFieldChange("email", e.target.value);
                  }}
                />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password
                  onChange={(e) => {
                    onFieldChange("password", e.target.value);
                  }}
                />
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
                id={styles.btn}
              >
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={result.isLoading}
                  className={styles.btn}
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
            <Link
              to=""
              id={styles.forgot_password}
            >
              Forgot Password?
            </Link>
            <p>
              Don&apos;t have an Account?
              <Link to={routePath.auth.register} id={styles.signup}>
                Create Account
              </Link>
            </p>
          </div>
        </div>
        <div className={styles.form__}></div>
        <img className={styles.microphone} src="../../assets/images/microphone.png" alt=""/>
      </div>
    </section>
  );
};

export default Login;

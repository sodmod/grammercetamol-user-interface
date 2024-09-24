import {Button, Form, Input} from "antd";
import {Link} from "react-router-dom";

import useFieldChange from "../../hooks/input-hook/useFieldChange";
import useRegistration from "../../hooks/auth-hook/useRegistration";

import {routePath} from "../../utils/constants";

import styles from "./register.module.css";
import {Logo, Microphone} from "../../components/index.js";

const Register = () => {
  const {onFieldChange, state} = useFieldChange();
  const {onRegister, result} = useRegistration();
  return (
    <section className={styles.section}>
      <div className={styles.center}>
        <div className={styles.form}>
          <div className={styles.form_}>
            <Link to={routePath.landpage}>
              <img src={Logo} alt="" className={styles.logo}/>
            </Link>
            <h3 className={styles.h3}>Registration Form</h3>
            <h3 className={styles.h4}>SignUp to Begin your Lessons</h3>
            <Form
              className="login-form"
              onFinish={onRegister}
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
                  value: state.request?.email,
                },
                {
                  name: "firstname",
                  value: state.request?.firstname,
                },
                {
                  name: "lastname",
                  value: state.request?.lastname,
                },
                {
                  name: "othername",
                  value: state.request?.othername,
                },
                {
                  name: "phoneNumber",
                  value: state.request?.phoneNumber,
                },
                {
                  name: "password",
                  value: state.request?.password,
                }
              ]}
            >
              <Form.Item
                label="Firstname"
                name="firstname"
                rules={[
                  {
                    required: true,
                    message: "Please input your firstname!",
                  },
                  {
                    type: "text",
                    message: "firstname cannot be empty",
                  },
                ]}
              >
                <Input
                  onChange={(e) => {
                    onFieldChange("firstname", e.target.value);
                  }}
                />
              </Form.Item>

              <Form.Item
                label="Lastname"
                name="lastname"
                rules={[
                  {
                    required: true,
                    message: "Please input your lastname!",
                  },
                  {
                    type: "text",
                    message: "invalid lastname",
                  },
                ]}
              >
                <Input
                  onChange={(e) => {
                    onFieldChange("lastname", e.target.value);
                  }}
                />
              </Form.Item>

              <Form.Item
                label="Othername"
                name="othername"
                rules={[
                  {
                    required: true,
                    message: "Please input your othername!",
                  },
                  {
                    type: "text",
                    message: "invalid othername",
                  },
                ]}
              >
                <Input
                  onChange={(e) => {
                    onFieldChange("othername", e.target.value);
                  }}
                />
              </Form.Item>

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
                label="Number"
                name="phoneNumber"
                rules={[
                  {
                    required: true,
                    message: "Please input your telephone number ",
                  },
                  {
                    type: "text",
                    message: "invalid phone number",
                  },
                ]}
              >
                <Input
                  onChange={(e) => {
                    onFieldChange("phoneNumber", e.target.value);
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
              >
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={result.isLoading}

                >
                  Register
                </Button>
              </Form.Item>

            </Form>
            <p>Already have an account?</p>
            <Link to={routePath.auth.login} id={styles.btn}>
              Login
            </Link>
          </div>
        </div>
        <div className={styles.form__}></div>
        <img className={styles.microphone} src={Microphone} alt=""/>
      </div>
    </section>
  );
};
export default Register;

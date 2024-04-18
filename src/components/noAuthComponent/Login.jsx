import React from "react";
import { Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../action";
import { useNavigate } from "react-router-dom";

const initialValues = {
  email: "",
  password: "",
  cpassword: "",
};

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state?.Users);

  const handleSignIn = (user) => {
    if (
      users.find(
        (data) => data.email === user.email && data.password === user.password
      )
    ) {
      user = {
        ...user,
        isLoggedIn: true,
      };
      dispatch(signIn(user));
    }
    navigate("/home");
  };

  return (
    <div className="login">
      <div>
        <Formik
          initialValues={initialValues}
          // validationSchema={signInValidation}
          onSubmit={(user) => {
            handleSignIn(user);
          }}
        >
          {({ errors }) => (
            <Form>
              <fieldset className="form">
                <h1>Login</h1>
                <label>E-mail: </label>
                <Field type="email" name="email"></Field>
                <br />
                {errors.email && <small>{errors.email}</small>}
                <br />
                <label>Password: </label>
                <Field type="password" name="password"></Field>
                <br />
                {errors.password && <small>{errors.password}</small>}
                <br />
                <button className="button" type="submit">
                  Submit
                </button>
              </fieldset>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;

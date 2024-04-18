import React from "react";
import { Formik, Form, Field } from "formik";
import { signupValidation } from "../validation/SignupValidation";
import { useDispatch } from "react-redux";
import { register } from "../../action";
import { useNavigate } from "react-router-dom";

const initialValues = {
  name: "",
  number: "",
  email: "",
  password: "",
  cpassword: "",
};
const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div style={{ paddingTop: "57px" }}>
      <Formik
        initialValues={initialValues}
        validationSchema={signupValidation}
        onSubmit={(data) => {
          dispatch(register(data));
          navigate("/login");
        }}
      >
        {({ errors }) => (
          <Form>
            <fieldset className="form">
              <h1>Create account</h1>
              <label>Enter your name: </label>
              <Field type="text" name="name"></Field>
              <br />
              {errors.name && <small>{errors.name}</small>}
              <br />
              <label>Mobile no.: </label>
              <Field type="tel" name="number"></Field>
              <br />
              {errors.number && <small>{errors.number}</small>}
              <br />
              <label>Enter your E-mail: </label>
              <Field type="email" name="email"></Field>
              <br />
              {errors.email && <small>{errors.email}</small>}
              <br />
              <label>Create Password</label>
              <Field type="password" name="password"></Field>
              <br />
              {errors.password && <small>{errors.password}</small>}
              <br />
              <label>Confirm Password</label>
              <Field type="password" name="cpassword"></Field>
              <br />
              {errors.cpassword && <small>{errors.cpassword}</small>}
              <br />
              <button type="submit" className="button">
                Submit
              </button>
            </fieldset>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;

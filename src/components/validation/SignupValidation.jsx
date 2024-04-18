import * as Yup from "yup";

export const signupValidation = Yup.object({
  name: Yup.string().min(3).required("Please enter name"),
  number: Yup.number().min(10).required("Please enter mobile no."),
  email: Yup.string()
    .email("Please enter valid email")
    .required("Please enter email"),
  password: Yup.string().min(5).required("Please enter password"),
  cpassword: Yup.string()
    .oneOf([Yup.ref("password")], "Password not matched")
    .required("Re-Enter password"),
});

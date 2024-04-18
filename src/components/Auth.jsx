import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

const Auth = (props) => {
  const userDetail = useSelector((state) => state?.userDetail);
  const navigate = useNavigate();
  const { children } = props;
  console.log(userDetail, "user");
  console.log(children);
  const isLoggedIn = userDetail?.isLoggedIn;
  console.log(isLoggedIn, "is");

  return isLoggedIn ? children : <Navigate to="/login" />;
};
export default Auth;

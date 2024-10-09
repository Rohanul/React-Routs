import React from "react";
import { Outlet } from "react-router-dom";
import SignUp from "../Pages/SignIn";

const ProtectRouts = () => {
  const isSignIn = true;

  return <div>{isSignIn ? <Outlet /> : <SignUp />}</div>;
};

export default ProtectRouts;

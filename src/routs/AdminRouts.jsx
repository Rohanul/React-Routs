import React from "react";
import { Outlet } from "react-router-dom";
import SignUp from "../Pages/SignIn";

const AdminRouts = () => {
  const isSignIn = true;
  const isAdmin = true;

  return isSignIn && isAdmin ? <Outlet /> : <SignUp />;
};

export default AdminRouts;

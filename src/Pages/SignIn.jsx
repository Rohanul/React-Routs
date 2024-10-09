import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
  //using useState
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  //form functions

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email === "rohanulislam9@gmail.com" && password === "111") {
      let user = {
        name: "Rohanul Islam",
        email: "roahnulislam9@gmail.com",
        city: "Dhaka",
        country: "Bangladesh",
        hobby: "Bike Riding",
        admin: false,
      };
      localStorage.setItem(
        "userData",
        JSON.stringify({ user, isSignIn: true })
      );
      const path = user.admin
        ? "/dashboard/admin/profile"
        : "/dashboard/user/profile";
      navigate(path, { state: user });
    } else {
      toast.error("Email or password is incorrect");
    }
  };

  return (
    <>
      <div className="signup-body">
        <h1 className="form-heading">User Sign In</h1>

        <form onSubmit={handleSubmit} action="" className="signup-form">
          <input
            className="email-input"
            type="email"
            name=""
            id="email"
            placeholder="email"
            onChange={handleEmailChange}
          />
          <input
            className="pass-input"
            type="password"
            name="password"
            placeholder="password"
            onChange={handlePasswordChange}
          />

          <button className="submit-button" type="submit">
            Sign In
          </button>
        </form>
        <ToastContainer />
      </div>
    </>
  );
};

export default SignIn;

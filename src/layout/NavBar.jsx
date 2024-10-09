import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NavBar = () => {
  const [isSignIn, setIsSignIn] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      const parsedUserData = JSON.parse(userData);
      setIsSignIn(parsedUserData?.isSignIn || false);
    }
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("userData"); // Remove user data on sign out
    setIsSignIn(false); // Update state to reflect sign-out
    toast.success("Successfully signed out!");
  };

  return (
    <>
      <header className="navbar">
        <div className="nav-brand">
          <Link to="/">Nomads</Link>
        </div>

        <div className="search-bar">
          <input type="text" placeholder="Search products..." />
          <button type="submit">Search</button>
        </div>

        <nav className="nav-links">
          <ul>
            <li>
              <Link to="/">Home</Link> {/* Changed to "/" for home */}
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              {!isSignIn ? (
                <>
                  <Link to="/signIn">Sign In</Link>
                </>
              ) : (
                <button onClick={handleSignOut}>Sign Out</button>
              )}
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <ToastContainer />
    </>
  );
};

export default NavBar;

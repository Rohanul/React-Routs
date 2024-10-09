import React from "react";
import { useLocation } from "react-router-dom";

const UserProfile = () => {
  const { state } = useLocation();

  return (
    <div className="form-body">
      <div>
        <h2 className="user-profile">User Profile</h2>

        {state ? (
          <>
            <p>
              <span className="profile-lavel">Name: </span>
              {state.name}
            </p>
            <p>
              <span className="email-lavel">Email: </span>
              {state.email}
            </p>
            <p>
              <span className="user-city">City: </span>
              {state.city}
            </p>

            <p>
              <span className="user-country">Country: </span>
              {state.country}
            </p>
            <p>
              <span className="user-hobby">Hobby</span>
              {state.hobby}
            </p>
          </>
        ) : (
          <p>no profile deducted</p>
        )}
      </div>
    </div>
  );
};

export default UserProfile;

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithPopup } = useAuth0();  

  return (
    <div className="container d-flex justify-content-center p-5">
      <div className="card">
        <div className="card-header">
          <img src="./assets/logo.png" alt="" />
        </div>
        <div className="card-body text-center">
          <button className="btn btn-primary" onClick={() => loginWithPopup()}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginButton;

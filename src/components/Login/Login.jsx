import React from "react";
import LoginButton from "./LoginButton";
import Profile from "./Profile";
import { useAuth0 } from "@auth0/auth0-react";

export default function Login() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading)
    return (
      <div className="container d-flex justify-content-center p-5">
        <div className="spinner-border mx-auto" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );

  return (
    <div>
      {isAuthenticated ? (
        <>
          <Profile />
        </>
      ) : (
        <LoginButton />
      )}
    </div>
  );
}

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton";

const Profile = () => {
  const { user, isLoading } = useAuth0();
  if (isLoading) {
    return (
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }
  return (
    
   
      <div className="card mb-3 text-center mx-auto" style={{maxWidth: "15rem"}}>
        <h3 className="card-header">{user.name}</h3>
        <div className="card-body mx-auto">
          <img src={user.picture} alt={user.name} />
        </div>

        <div className="card-body">
          <p className="card-text">{user.email}</p>
        </div>

        <div className="card-footer text-muted">
          <LogoutButton />
        </div>
      </div>
    
  );
};
export default Profile;

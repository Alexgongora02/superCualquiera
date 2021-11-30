import React from "react";
import LoginButton from "./LoginButton"
import Profile from "./Profile"
import LogoutButton from "./LogoutButton"
import {useAuth0} from "@auth0/auth0-react"


export default function Login() {
    const {isAuthenticated , isLoading}= useAuth0()
    if (isLoading) return <h1>Cargando...</h1>

    return (

        <div>
            {
             isAuthenticated ?  <LoginButton/> : <LogoutButton/>
            }
            
            <Profile/>
           
        </div>
    )}
import React from "react";
import ReactDOM from "react-dom";
import {Auth0Provider} from "@auth0/auth0-react"
import "./index.css";
import App from "./App.jsx";


ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-2z251kkp.us.auth0.com"
    clientId="iRTuS1osHTxttMzCXCngs2otqlkY0CjD"
    redirectUri={window.location.origin}>
    <App />
    </Auth0Provider>,
   
  </React.StrictMode>,

  document.getElementById("root")
);

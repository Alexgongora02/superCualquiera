import React from "react";
import store from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Form from "./components/Form";
import Home from "./components/Home";
import {useAuth0} from "@auth0/auth0-react"

import UploadProducts from "./components/UploadProducts";
import Login from "./components/Login";

import Logout from "./components/Logout";
import {Profile} from "./components/Profile";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Categorias from "./components/Navbar/Categorias";
import Lista from "./components/Navbar/Lista";
import PagoDeCompra from "./components/PagoDeCompra";
import Pedidos from "./components/Pedidos";
import Dashboard from "./components/Dashboard/Dashboard";
import "./App.css";

function App() {
  const {isAuthenticated} = useAuth0()
  return (
    <Router>
      
  
      <Provider store={store}>
        <Navbar />
        <div className="container container-main">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/form" component={Form} />
            <Route path="/login" component={Login}/>   
            <Route path="/profile" component ={Profile}/>
            <Route path="/logout" component={Logout}/>
            <Route path="/upload" component={UploadProducts} />
            <Route path="/categorias" component={Categorias} />
            <Route path="/lista" component={Lista} />
            <Route path="/pago" component={PagoDeCompra} />
            <Route path="/pedidos" component={Pedidos} />
            <Route path="/dashboard" component={Dashboard} />
            
            
        
          </Switch>
        </div>
        <Footer>
          <h4>Footer</h4>
        </Footer>
      </Provider>
     
    </Router>
  );
}

export default App;

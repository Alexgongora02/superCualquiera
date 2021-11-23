import React from "react";
import store from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Form from "./components/Form";
import Home from "./components/Home";
import UploadProducts from "./components/UploadProducts";
import { Auth0Provider } from "@auth0/auth0-react";
import Login from "./components/Login";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Categorias from "./components/Navbar/Categorias";
import Lista from "./components/Navbar/Lista";
import PagoDeCompra from "./components/PagoDeCompra";
import Exito from "./components/PagoDeCompra/Exito"
import Pedidos from "./components/Pedidos";

import "./App.css";

function App() {
  return (
    <Router>
      <Auth0Provider
    domain="dev-2z251kkp.us.auth0.com"
    clientId="iRTuS1osHTxttMzCXCngs2otqlkY0CjD"
    redirectUri={window.location.origin}
  >
      <Provider store={store}>
        <Navbar />
        <div className="container container-main">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/form" component={Form} />
            <Route path="/login" component={Login} />
            <Route path="/upload" component={UploadProducts} />
            <Route path="/categorias" component={Categorias} />
            <Route path="/lista" component={Lista} />
            <Route path="/pago" component={PagoDeCompra} />
            <Route path="/exito/:id" component={Exito} />
            <Route path="/pedidos" component={Pedidos} />
          </Switch>
        </div>
        <Footer>
          <h4>Footer</h4>
        </Footer>
      </Provider>
      </Auth0Provider>,
    </Router>
  );
}

export default App;

import React from "react";
import store from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Form from "./components/Form";
import Home from "./components/Home";

import UploadProducts from "./components/UploadProducts";
import Login from "./components/Login/Login";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Categorias from "./components/Navbar/Categorias";
import Lista from "./components/Navbar/Lista";
import PagoDeCompra from "./components/PagoDeCompra";
import Exito from "./components/PagoDeCompra/Exito";
import Pedidos from "./components/Pedidos";
import Dashboard from "./components/Dashboard/Dashboard";
import "./App.css";

function App() {
  return (
    <Router>
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
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
        <Footer />
      </Provider>
    </Router>
  );
}

export default App;

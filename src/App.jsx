import React from "react";
import store from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";
import Form from "./components/Form";
import Home from "./components/Home";
import UploadProducts from "./components/UploadProducts";
import { Auth0Provider } from "@auth0/auth0-react";
import Login from "./components/Login";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Lista from "./components/Navbar/Lista";
import PagoDeCompra from "./components/PagoDeCompra";
import Exito from "./components/PagoDeCompra/Exito";
import Pedidos from "./components/Pedidos";
import Cancelar from "./components/Pedidos/Cancelar";
import SubNewsletter from "./components/Footer/SubNewsletter";
import QuieroTarjeta from "./components/auxliares/QuieroTarjeta";
import "./App.css";

function App() {
  return (
    <Router>
      <ScrollToTop>
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
                <Route path="/lista" component={Lista} />
                <Route path="/pago" component={PagoDeCompra} />
                <Route path="/exito/:id" component={Exito} />
                <Route path="/pedidos" component={Pedidos} />
                <Route path="/cancelar" component={Cancelar} />
                <Route path="/newsletter" component={SubNewsletter} />
                <Route path="/mitarjeta" component={QuieroTarjeta} />
              </Switch>
            </div>
            <Footer />
          </Provider>
        </Auth0Provider>
      </ScrollToTop>
    </Router>
  );
}

export default App;

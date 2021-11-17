import React from "react";
import store from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Form from "./components/Form";
import Home from "./components/Home";
import UploadProducts from "./components/UploadProducts";
import Login from "./pages/LOGIN/Login";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Categorias from "./components/Navbar/Categorias";
import Lista from "./components/Navbar/Lista";
import PagoDeCompra from "./components/PagoDeCompra"
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

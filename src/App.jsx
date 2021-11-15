import React from "react";
import store from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Form from "./components/Form";
import Home from "./components/Home";
import UploadProducts from "./components/UploadProducts";
import Login from "./pages/LOGIN/Login";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Footer from "./components/Footer";
import Categorias from "./components/Navbar/Categorias";
import Buscar from "./components/Navbar/Buscar";
import Lista from "./components/Navbar/Lista";
import Carrito from "./components/Navbar/Carrito";





function App() {
  return (
    <Router>
      <Provider store={store}>
        <Navbar />
        
        <div className="container container-main">
            <Switch>
               
               <Route exact path="/" component={Home} />
               <Route path="/Form" component={Form} />
               <Route path="/login" component={Login} />
               <Route path="/upload" component={UploadProducts} />
               <Route path="/Categorias" component={Categorias} />
               <Route path="/Carrito" component={Carrito} />
               <Route path="/Lista" component={Lista} />
               <Route path="/Buscar" component={Buscar} /> 
               
               
               
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





            
            
           

           
    







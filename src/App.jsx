import React from "react";
import store from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Form from "./components/Form";
import Home from "./components/Home";
import "./App.css";
import Login from "./pages/LOGIN/Login";
import Categorias from "./components/Categorias";




function App() {
  return (
    <Router>
      <Provider store={store}>
        
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            
            <Route exact path="/" component={Form} />
            
            <Route path="/" component={Login} />

            <Route path="/" component={Categorias} />

            





            </Switch>
            
            <Route path="/contact" render={() => <Form/>} />
        </div>
        <footer>
          <h4>Footer</h4>
        </footer>
      </Provider>
    </Router>
  );
}

export default App;

import React from "react";
import store from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Form from "./components/Form";
import Home from "./components/Home";

import "./App.css";
import Login from "./pages/LOGIN/Login";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <h1 className="mx-auto">Navbar</h1>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />

            <Route exact path="/" component={Form} />
           

            <Route path="/login" component={Login} />
           

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

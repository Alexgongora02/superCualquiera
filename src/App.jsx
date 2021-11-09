import React from "react";
import store from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Form from "./components/Form";
import Home from "./components/Home";

import "./App.css";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <h1 className="mx-auto bg-primary text-center p-2">Navbar</h1>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/" component={Form} />
            <Route path="/login" render={() => <h1>Login</h1>} />
          </Switch>
            <Route path="/contact" render={() => <Form/>} />
        </div>
        <footer className="mx-auto bg-primary text-center text-white mt-3 pb-1">
          <h4>Footer</h4>
        </footer>
      </Provider>
    </Router>
  );
}

export default App;

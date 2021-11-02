import React from "react";
import store from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
            <Route path="/login" render={() => <h1>Login</h1>} />
            <Route path="/contact" render={() => <h1>Contact</h1>} />
          </Switch>
        </div>
        <footer className="mx-auto bg-primary text-center text-white mt-3 pb-1">
          <h4>Footer</h4>
        </footer>
      </Provider>
    </Router>
  );
}

export default App;

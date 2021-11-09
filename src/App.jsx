import React from "react";
import store from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import Login from "./pages/LOGIN/Login";


function App() {
  return (
    <Router>
      <Provider store={store}>
        
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/contact" render={() => <h1>Contact</h1>} />
          </Switch>
        </div>
        <footer>
          <h4>Footer</h4>
        </footer>
      </Provider>
    </Router>
  );
}

export default App;

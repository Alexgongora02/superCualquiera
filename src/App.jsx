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




function App() {
  return (
    <Router>
      <Provider store={store}>
        <Navbar />
        <div className="container">
            <Switch>
               
               <Route exact path="/" component={Home} />
               <Route path="/Form" component={Form} />
               <Route path="/login" component={Login} />
               <Route path="/upload" component={UploadProducts} />
               
               
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





            
            
           

           
    







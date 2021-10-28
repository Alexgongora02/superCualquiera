import React from "react";
import store from "./store/store";
import { Provider } from "react-redux";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <h1 className="mx-auto">Supermercado SuperReact</h1>
    </Provider>
  );
}

export default App;

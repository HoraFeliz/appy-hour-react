import React from "react";
import ReactDOM from "react-dom";
import './services/languaje'
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { BrowserView, MobileView } from "react-device-detect";
import { AuthContextProvider } from "./context/AuthContext";

ReactDOM.render(
  <>
    <BrowserView>
      <div className="appy--browser-view">
        <h3>Para Visualizar la App</h3>
        <h5>Active Modo Móvil</h5>
      </div>
    </BrowserView>
    <MobileView>
      <Router>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </Router>
    </MobileView>
  </>,
  document.getElementById("root")
);

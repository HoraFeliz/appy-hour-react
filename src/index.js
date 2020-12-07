import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { BrowserView, MobileView } from "react-device-detect";

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
        <App />
      </Router>
    </MobileView>
  </>,
  document.getElementById("root")
);

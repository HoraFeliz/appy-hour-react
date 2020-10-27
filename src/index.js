import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, } from "react-router-dom";
import {
  BrowserView,
  MobileView,
} from "react-device-detect";


ReactDOM.render(
  <React.StrictMode>
    <BrowserView>
      <div className="appy--browser-view">
        <h1>Hello Browser</h1>
      </div>
    </BrowserView>
    <MobileView>
      <Router>
        <App />
      </Router>
    </MobileView>
  </React.StrictMode>,
  document.getElementById('root')
);

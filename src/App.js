import React from "react";
// import logo from './logo.svg';
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Tours from "./components/tours/Tours";
import RecordTour from "./components/RecordTour";

import Profile from "./components/Profile";
import Options from "./components/Options";
import NavbarMenu from "./components/navbar/NavbarMenu";
import FooterNavbar from "./components/navbar/FooterNavbar";
import PlaceId from "./components/places/PlaceId";
import { createTour } from "./services/api-client";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <NavbarMenu />
        <FooterNavbar />
      </header>
      <main className="App-main">
        <Switch>
          <Route exact path="/" component={Tours}></Route>
          <Route exact path="/place" component={PlaceId}></Route>
          <Route exact path="/tours" component={Tours}></Route>
          <Route exact path="/record" component={RecordTour}></Route>
          <Route exact path="/profile" component={Profile}></Route>
          <Route exact path="/options" component={Options}></Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;

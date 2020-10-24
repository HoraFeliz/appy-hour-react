import React from "react";
// import logo from './logo.svg';
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import RecordTour from "./components/RecordTour";
import Profile from "./components/Profile";
import Options from "./components/Options";
import NavbarMenu from "./components/Navbar/NavbarMenu";
import CreateTour from "./components/create-tour/CreateTour";
import Tours from "./components/tours/Tours";
import Tour from "./components/tour/Tour";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <NavbarMenu />
      </header>
      <main className="App-main">
        <Switch>
          <Route exact path="/tours" component={Tours}></Route>
          <Route exact path="/record" component={RecordTour}></Route>
          <Route exact path="/create" component={CreateTour}></Route>
          <Route exact path="/profile" component={Profile}></Route>
          <Route exact path="/options" component={Options}></Route>
          <Route exact path="/tour/:id" component={Tour} />
        </Switch>
      </main>
    </div>
  );
}

export default App;

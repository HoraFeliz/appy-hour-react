import React from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Tours from "./components/tours/Tours";
import RecordTour from "./components/RecordTour";
import Tour from "./components/tour/Tour";
import Profile from "./components/Profile";
import Options from "./components/Options";
import NavbarMenu from "./components/navbar/NavbarMenu";
import FooterNavbar from "./components/navbar/FooterNavbar";
import PlaceId from "./components/places/PlaceId";
import CreateTour from "./components/create-tour/CreateTour";
import TourDetail from "./components/tours/TourDetail";
import Login from "./components/login/Login";
import AddPlaces from "./components/addplaces/AddPlaces";
import PlaceMap from "./components/places/placemap/PlaceMap";

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
          <Route exact path="/place/:id/:tour" component={PlaceId}></Route>
          <Route exact path="/create" component={CreateTour}></Route>
          <Route exact path="/tourdetail" component={TourDetail}></Route>
          <Route exact path="/tours" component={Tours}></Route>
          <Route exact path="/record" component={RecordTour}></Route>
          <Route exact path="/profile" component={Profile}></Route>
          <Route exact path="/options" component={Options}></Route>
          <Route exact path="/tour/:id" component={TourDetail} />
          <Route exact path="/tour/places/add" component={Tour} />
          <Route exact path="/tour/add/:id" component={AddPlaces} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </main>
    </div>
  );
}

export default App;

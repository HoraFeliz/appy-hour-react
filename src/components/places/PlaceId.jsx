import React, { Component } from "react";
import InfoBar from "../infobar/InfoBar";
import ImageCanvas from "../common/ImageCanvas";
import PlaceInfo from "./PlaceInfo";
import { getPlace, getTourById } from "../../services/api-client";

class PlaceId extends Component {
  state = {
    place: [],
    tour: {},
  };

  fetchPlaces = () => {
    getPlace(this.props.match.params.id).then((place) => {
      console.log(place);
      this.setState({ place });
    });
  };
  fetchTour = () => {
    getTourById(this.props.match.params.tour).then((tour) => {
      console.log(tour);
      this.setState({ tour });
    });
  };
  componentDidMount() {
    this.fetchPlaces();
    this.fetchTour();
  }

  render() {
    return (
      <div>
        <InfoBar back={true} tour={this.state.tour} />
        <div className="appy--place-item">
          <div
            className="appy--place-item-map"
            style={{
              backgroundImage: "url('/img/map-place.png'",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          {console.log('Params Tour:', this.state.tour.id)}
          <ImageCanvas place={true} recommended={true} placeInfo={this.state.place} />
          <PlaceInfo place={this.state.place} placeInfo={this.state.place} />
        </div>
      </div>
    );
  }
}

export default PlaceId;

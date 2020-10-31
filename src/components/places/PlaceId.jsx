import React, { Component } from "react";
import InfoBar from "../infobar/InfoBar";
import ImageCanvas from "../common/ImageCanvas";
import PlaceInfo from "./PlaceInfo";
import { getPlace } from "../../services/api-client";

class PlaceId extends Component {
  state = {
    place: [],
  };

  componentDidMount() {
    console.log(this.props.match.params.id);
    this.fetchPlaces();
  }
  fetchPlaces = () => {
    getPlace(this.props.match.params.id).then((place) => {
      console.log(place);
      this.setState({ place });
    });
  };

  render() {
    return (
      <div>
        <InfoBar back={true} tour={{ name: "hola" }} />
        <div className="appy--place-item">
          <div
            className="appy--place-item-map"
            style={{
              backgroundImage: "url('./img/map-place.png'",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <p>{this.state.place.name}</p>
          <ImageCanvas place={true} recommended={true} />
          <PlaceInfo place={this.state.place} />
        </div>
      </div>
    );
  }
}

export default PlaceId;

import React, { Component } from "react";
import InfoBar from "../infobar/InfoBar";
import MapWithADirectionsRenderer from "./directionsrenderer/DirectionsRenderer";
import PlaceListItem from "../places/PlaceListItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faRoute,
  faStopwatch,
  faWalking,
} from "@fortawesome/free-solid-svg-icons";
import BeerRating from "../common/BeerRating";
import { getPlaces, getTourById } from "../../services/api-client";
import AppyButton from "../common/AppyButton";

class TourDetail extends Component {
  state = {
    places: [],
    tour: {},
    directions: [],
  };

  componentDidMount() {
    this.fetchPlaces();
    this.fetchTour();
  }

  calculateDistance = (...places) => {
    const service = new window.google.maps.DistanceMatrixService();

    const addresOrigin = [...places].pop();
    const origin2 = addresOrigin.address;
    console.log("origin2", origin2);
    const restOfPlaces = [...places];

    let destinations = [];
    restOfPlaces.forEach((place) => {
      destinations.push(place.address);
    });

    console.log("destinations", destinations.join());

    service.getDistanceMatrix(
      {
        origins: [origin2],
        destinations: destinations,
        travelMode: window.google.maps.TravelMode.WALKING,
        unitSystem: window.google.maps.UnitSystem.METRIC,
      },
      (response, status) => {
        console.log("res", response);
        if (status !== "OK") {
          console.log("Error was: " + status);
        } else {
          const originList = response.originAddresses;
          console.log("origin", originList);
          for (let i = 0; i < originList.length; i++) {
            const results = response.rows[i].elements;
            console.log(`Direcciones tramo ${i}: ${JSON.stringify(results)}`);
            this.setState({ directions: [...results] });
            for (let j = 0; j < results.length; j++) {
              console.log(`Direcciones tramo ${i}: ${JSON.stringify(results)}`);
            }
          }
        }
      }
    );
  };

  fetchPlaces = () => {
    getPlaces(this.props.match.params.id).then((places, i) => {
      this.calculateDistance(...places);
      this.setState({ places });
    });
  };

  fetchTour = () => {
    getTourById(this.props.match.params.id).then((tour) => {
      this.setState({ tour });
    });
  };

  render() {
    return (
      <div>
        <InfoBar back={true} tour={this.state.tour} place={this.state.places} />
        <div className="appy--tours-detail">
          <MapWithADirectionsRenderer />
        </div>

        <div className="appy--tours-detail-info">
          <h2 className="appy--tours-detail-info-placename">
            {this.state.tour.name}
          </h2>
          <div className="appy--tours-item-info-creator">
            <div className="appy--tours-item-info-creator-icon">
              <FontAwesomeIcon icon={faRoute} />
            </div>
            <div className="appy--tours-item-info-creator-text">
              Appy Hour Tours
            </div>
          </div>
          <p className="appy--tours-detail-info-description">
            {this.state.tour.description}
          </p>
          <hr />
          <div
            className={`appy--tours-detail-distancebar`}
            style={{ backgroundColor: "white" }}
          >
            <div className="appy--tours-item-distancebar-distante-tour">
              <div className="appy--tours-item-distancebar-icon">
                <FontAwesomeIcon icon={faWalking} />
              </div>
              <div
                className="appy--tours-item-distancebar-text"
                style={{ color: "#707070" }}
              >
                12 Km.
              </div>
            </div>
            <div className="appy--tours-item-distancebar-distante-tour">
              <div className="appy--tours-item-distancebar-icon">
                <FontAwesomeIcon icon={faStopwatch} />
              </div>
              <div
                className="appy--tours-item-distancebar-text"
                style={{ color: "#707070" }}
              >
                30 Min.
              </div>
            </div>
            <div className="appy--tours-item-distancebar-distante-nearby">
              <div className="appy--tours-item-distancebar-icon">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
              <div
                className="appy--tours-item-distancebar-text"
                style={{ color: "#707070" }}
              >
                {this.state.places.length + " Places"}
              </div>
            </div>
          </div>
          <hr />
          {this.state.places.length
            ? this.state.places.map((place, key) => (
                <PlaceListItem
                  key={key}
                  type="num"
                  num={key}
                  total={this.state.places.length}
                  recommended={false}
                  place={place}
                  directions={this.state.directions[key]}
                  tour={this.state.tour}
                />
              ))
            : "NO PLACES"}
          <hr style={{ marginBottom: "10px" }} />
          <div className="appy--tours-detail-rating-container">
            <div className="appy--row">
              <div className="appy--col-6">
                <span className="appy--tours-detail-rating-text">
                  Appy Hour Rating
                </span>
              </div>
              <div className="appy--col-6">
                <BeerRating type="tour-detail" />
              </div>
            </div>
          </div>
          <hr style={{ marginTop: "10px" }} />
          <div className="appy--tours-detail-share">
            <div className="container">
              <div className="row">
                <div className="appy--col-6">
                  <span className="appy--tours-detail-share-text">
                    Share Tour
                  </span>
                </div>
                <div className="appy--col-6">
                  <div className="appy--tours-detail-share-buttons">
                    <a href={`whatsapp://send?text=${window.location.href}`}>
                      <AppyButton type="whatsapp" />
                    </a>
                    <a
                      target="_blank"
                      href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}&amp;src=sdkpreparse`}
                      class="fb-xfbml-parse-ignore"
                    >
                      <AppyButton type="facebook" />
                    </a>
                    <a
                      target="_blank"
                      href={`https://twitter.com/intent/tweet?text=${window.location.href}`}
                    >
                      <AppyButton type="twitter" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TourDetail;

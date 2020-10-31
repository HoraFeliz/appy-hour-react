import React, { Component } from "react";
import InfoBar from "../infobar/InfoBar";
import PlaceListItem from "../places/PlaceListItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faRoute,
  faStopwatch,
  faWalking,
} from "@fortawesome/free-solid-svg-icons";
import BeerRating from "../common/BeerRating";
import {
  getAllPlaces,
  getPlaces,
  getTourById,
} from "../../services/api-client";
import AppyButton from "../common/AppyButton";

class TourDetail extends Component {
  state = {
    places: [],
    tour: {},
  };

  componentDidMount() {
    console.log(this.props.match.params.id);
    this.fetchPlaces();
    this.fetchTour();
  }
  fetchPlaces = () => {
    getPlaces(this.props.match.params.id).then((places) => {
      this.setState({ places });
    });
  };

  fetchTour = () => {
    getTourById(this.props.match.params.id).then((tour) => {
      console.log(tour);
      this.setState({ tour });
    });
  };

  fetchAllPlaces = () => {
    getAllPlaces().then((places) => {
      console.log(places);
      this.setState({ places });
    });
  };
  render() {
    return (
      <div>
        <InfoBar back={true} tour={this.state.tour} />
        <div className="appy--tours-detail">
          <div
            className="appy--tours-detail-map"
            style={{
              backgroundImage: "url('/img/map-route.png'",
              backgroundSize: "cover",
              backgroundPosition: "center right",
            }}
          ></div>
        </div>

        {/*  Image Canvas */}
        {/* <ImageCanvas place={true} recommended={true} /> */}
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
                    <AppyButton type="whatsapp" />
                    <AppyButton type="facebook" />
                    <AppyButton type="twitter" />
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

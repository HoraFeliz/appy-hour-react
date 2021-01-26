import React from "react";
import { getTourById } from "../../../services/api-client";
const { compose, withProps, lifecycle } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
} = require("react-google-maps");

const googleMapsUrl = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAPS_API_KEY}&v=3.exp&libraries=geometry,drawing,places`;
const primary = "#C8102E";
const lineSymbol = {
  path: "M 1,0 1,0",
  strokeOpacity: .7,
  scale: 1,
  strokeWeight: 5,
};


const drawingOptions = {
  polylineOptions: {
    strokeColor: primary,
    strokeWeight: 3,
    strokeOpacity: 0,
    icons: [
      {
        icon: lineSymbol,
        offset: "1",
        repeat: "10px",
      },
    ],
  },
  markerOptions: {
    icon: "/img/marker-default.svg",
    markerLabel: {
      text: "Hello",
      color: "#ffffff",
      fontSize: "30px",
    },
  },
};

const MapWithADirectionsRenderer = compose(
  withProps({
    googleMapURL: googleMapsUrl,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `350px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentDidMount() {
      const tourId = window.location.href.split("tour/")[1];
      let places = [];
      getTourById(tourId).then((tour) => {
        places = tour.places;
        const DirectionsService = new window.google.maps.DirectionsService();
        let waypts = [];

        const origin = places.shift();
        let destination;
        if (places.length) {
          destination = places.pop();
        }

        places.forEach((place) => {
          let waypoint = {
            location: `${place.geometry.latitude}, ${place.geometry.longitude}`,
            stopover: true,
          };
          waypts.push(waypoint);
        });

        DirectionsService.route(
          {
            origin: new window.google.maps.LatLng(
              origin.geometry.latitude,
              origin.geometry.longitude
            ),
            destination: destination
              ? new window.google.maps.LatLng(
                destination.geometry.latitude,
                destination.geometry.longitude
              )
              : "",
            waypoints: waypts || "",
            travelMode: window.google.maps.TravelMode.WALKING,
            optimizeWaypoints: true,
          },
          (result, status) => {
            if (status === window.google.maps.DirectionsStatus.OK) {
              this.setState({
                places: this.props.places,
                directions: result,
                options: drawingOptions,
              });
            }
          }
        );
      });
    },
  })
)((props) => (
  <GoogleMap
    defaultZoom={7}
    defaultCenter={new window.google.maps.LatLng(40.41831, -3.70275)}
  >
    {props.directions && (
      <DirectionsRenderer
        options={props.options}
        directions={props.directions}
      />
    )}
  </GoogleMap>
));

export default MapWithADirectionsRenderer;

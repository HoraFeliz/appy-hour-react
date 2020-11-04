import React, { Children } from "react";
const { compose, withProps, lifecycle } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
} = require("react-google-maps");

const googleMapsUrl = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAPS_API_KEY}&v=3.exp&libraries=geometry,drawing,places`;
const red = "rgb(200,16,46)";

const MapWithADirectionsRenderer = compose(
  withProps({
    googleMapURL: googleMapsUrl,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentDidMount() {
      const DirectionsService = new window.google.maps.DirectionsService();
      let waypts = [];

      let originLat;
      let originLong;
      let destinationLong;
      let destinationLat;

      const newPlaces = this.props.places;

      if (newPlaces.length <= 2) {
        originLat = 40.41831;
        originLong = -3.70275;
        destinationLat = 40.41831;
        destinationLong = -3.70275;
      } else {
        const origin = newPlaces.pop();
        originLat = origin.geometry.latitude;
        originLong = origin.geometry.longitude;
        if (newPlaces.length >= 1) {
          const destination = newPlaces.shift();
          destinationLat = destination.geometry.latitude;
          destinationLong = destination.geometry.longitude;
        } else {
          destinationLat = 40.41831;
          destinationLong = -3.70275;
        }
      }

      newPlaces.forEach((place) => {
        let waypoint = {
          location: `${place.geometry.latitude}, ${place.geometry.longitude}`,
          stopover: true,
        };
        console.log("waypoints", waypts);
        waypts.push(waypoint);
      });

      DirectionsService.route(
        {
          origin: new window.google.maps.LatLng(originLat, originLong),
          destination: new window.google.maps.LatLng(
            destinationLat,
            destinationLong
          ),
          waypoints: waypts,
          travelMode: window.google.maps.TravelMode.WALKING,
          optimizeWaypoints: true,
        },
        (result, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
            this.setState({
              places: this.props.places,
              directions: result,
              options: {
                polylineOptions: {
                  strokeColor: red,
                  strokeWeight: 6,
                },
                markerOptions: {
                  icon: "/img/marker-default.svg",
                  markerLabel: {
                    text: "Hello",
                    color: "#ffffff",
                    fontSize: "30px",
                  },
                },
              },
            });
          } else {
            console.error(`error fetching directions ${result}`);
          }
        }
      );
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
        places={props.places}
      />
    )}
  </GoogleMap>
));

export default MapWithADirectionsRenderer;

import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const PlaceMap = (props) => {
  const mapStyles = {
    width: "100%",
    height: "50%",
    position: "relative",
  };

  return (
    <React.Fragment>
      <Map
        initialCenter={{ lat: props.lat, lng: props.lng }}
        google={props.google}
        style={mapStyles}
        className={"map"}
        zoom={12}
      >
        {props.name && props.lat && props.lng ? (
          <Marker
            title={props.name}
            name={props.name}
            position={{ lat: props.lat, lng: props.lng }}
          />
        ) : (
          "Loading Place Map"
        )}
      </Map>
    </React.Fragment>
  );
};

export default GoogleApiWrapper({
  apiKey: `${process.env.REACT_APP_MAPS_API_KEY}`,
})(PlaceMap);

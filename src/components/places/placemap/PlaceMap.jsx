import React from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";

class PlaceMap extends React.Component {
  state = {
    showingInfoWindow: false, // Hides or shows the InfoWindow
    activeMarker: {}, // Shows the active marker upon click
    selectedPlace: {}, // Shows the InfoWindow to the selected place upon a marker
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };
  mapStyles = {
    width: "100%",
    height: "50%",
    position: "relative",
  };

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={this.mapStyles}
        initialCenter={{ lat: this.props.lat, lng: this.props.lng }}
      >
        <Marker
          icon={{
            url: "/img/marker-recommended.svg",
            anchor: this.props.google.maps.Point(17, 46),
            scaledSize: this.props.google.maps.Size(37, 37),
          }}
          onClick={this.onMarkerClick}
          position={{ lat: this.props.lat, lng: this.props.lng }}
          name={this.props.name}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h1>{this.props.name}</h1>
            <h4>Hola que tal</h4>
            <p>Customzar aqui</p>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: `${process.env.REACT_APP_MAPS_API_KEY}`,
})(PlaceMap);

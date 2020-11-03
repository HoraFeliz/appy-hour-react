import React from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";

class PlaceMap extends React.Component {
  state = {
    showingInfoWindow: true, // Hides or shows the InfoWindow
    activeMarker: {}, // Shows the active marker upon click
    selectedPlace: {}, // Shows the InfoWindow to the selected place upon a marker
  };

  onMarkerClick = (props, marker, e) =>
    this.setState(
      {
        selectedPlace: {
          ...props,
          address: this.props.address,
          isOpen: this.props.isOpen,
        },
        activeMarker: marker,
        showingInfoWindow: true,
      },
      console.log("hola", this.state.selectedPlace)
    );

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
    height: "240px",
    position: "relative",
  };

  containerStyle = {
    position: "absolute",
    width: "calc(100% - 10px",
    height: "100%",
    top: "115px",
  };

  render() {
    return (
      <Map
        containerStyle={this.containerStyle}
        google={this.props.google}
        zoom={16}
        style={this.mapStyles}
        initialCenter={{ lat: this.props.lat, lng: this.props.lng }}
      >
        <Marker
          icon={{
            url: "/img/marker-default.svg",
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
            <h1 className="appy--place-item-map-infowindow-title">
              {this.props.name}
            </h1>
            <p className="appy--place-item-map-infowindow-address">
              <strong>Address:</strong> Address
            </p>
            <p className="appy--place-item-map-infowindow-address">
              <strong>IsOpen:</strong> isOpen
            </p>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: `${process.env.REACT_APP_MAPS_API_KEY}`,
})(PlaceMap);

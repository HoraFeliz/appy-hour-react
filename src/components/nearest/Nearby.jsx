import React from "react";
import NearbyList from "./NearbyList";
import NearbyMap from "./NearbyMap";

const API_KEY = process.env.REACT_APP_MAPS_API_KEY;

let map;
let infowindow;
let service;

class Nearby extends React.Component {
  state = {
    placesDetails: [],
    sortedPlacesDetails: [],
    lat: 40.416775,
    lng: -3.70379,
    zoom: 15,
  };

  componentDidMount() {
    this.renderMap();
  }

  renderMap = () => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places&callback=initMap`
    );
    window.initMap = this.initMap;
  };

  initMap = () => {
    // Default Location
    let location = {
      lat: this.state.lat,
      lng: this.state.lng,
    };

    // Initialize Map
    map = new window.google.maps.Map(document.getElementById("map"), {
      center: location,
      zoom: 16,
      // styles: mapStyle,
    });


    // Current Location Marker
    let marker = new window.google.maps.Marker({
      position: location,
      map: map,
      title: "You're Here!",
      icon: {
        url:
          "/img/marker-user.svg",
        anchor: new window.google.maps.Point(10, 10),
        // scaledSize: new window.google.maps.Size(20, 20),
      },
    });

    // Ask for user location
    this.getCurrentLocation();

    // Request Info: It will be used for Google Places API `PlacesServices` to get certain places that match our criteria
    var request = {
      location: location,
      radius: 800,
      type: ["restaurant"],
    };

    infowindow = new window.google.maps.InfoWindow();
    service = new window.google.maps.places.PlacesService(map);
    service.nearbySearch(request, this.callback);
  };

  callback = (results, status) => {
    let that = this;
    if (status === window.google.maps.places.PlacesServiceStatus.OK) {
      let placesInfo = [];
      let fields = [
        "address_components",
        "place_id",
        "geometry",
        "icon",
        "name",
        "photos",
        "types",
        "formatted_address",
        "name",
        "rating",
        "formatted_phone_number",
        "reviews",
        "user_ratings_total",
        "website",
        "photo",
        "opening_hours",
        "price_level",
        "types",
      ];

      // Get Places Details
      results.map((place) => {
        service.getDetails({ placeId: place.place_id, fields }, function (
          placeInfo,
          status
        ) {
          if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            // Add New Place
            placesInfo.push(placeInfo);

            // Update All Places & Add Markers
            that.setState(
              {
                placesDetails: placesInfo,
                sortedPlacesDetails: placesInfo,
              },
              that.addMarkers(placesInfo)
            );
          }
        });
      });
    }
  };

  addMarkers = (placesInfo) => {
    placesInfo.forEach(this.createMarker);
  };

  createMarker = (place) => {
    var marker = new window.google.maps.Marker({
      map: map,
      title: place.name,
      icon: {
        url:
          "/img/marker-add.svg",
        anchor: new window.google.maps.Point(10, 10),
        // scaledSize: new window.google.maps.Size(20, 20),
      },
      position: place.geometry.location,
    });

    marker.addListener("click", function () {
      var request = {
        reference: place.reference,
      };
      console.log("clicked", place);

      let placePicture = place.photos
        ? place.photos[0].getUrl({ maxWidth: 300, maxHeight: 300 })
        : "https://via.placeholder.com/300";

      let content = `
        <h4 style="text-align: left;">${place.name}</h4>
        <ul style="text-align: left; list-style: none; padding-left: 0px">
          <li>${place.formatted_address}</li>
          <li>${place.formatted_phone_number}</li>
        </ul>
        <button class="btn appy--primary-bg appy--white-color mb-3" >Add</button>
      `;
      infowindow.setContent(content);
      infowindow.open(map, marker);
    });
  };

  getCurrentLocation = () => {
    let self = this;
    let infoWindow = new window.google.maps.InfoWindow();

    let handleLocationError = (browserHasGeolocation, infoWindow, pos) => {
      infoWindow.setPosition(pos);
      infoWindow.setContent(
        browserHasGeolocation
          ? "Error: The Geolocation service failed."
          : "Error: Your browser doesn't support geolocation."
      );
      infoWindow.open(map);
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          infoWindow.setPosition(pos);
          infoWindow.setContent("You're here!");
          infoWindow.open(map);
          map.setCenter(pos);

          self.setState({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });

          self.initMap();
        },
        function () {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  };

  handleSort = (e) => {
    let places = this.state.placesDetails;
    let sortedPlaces = [];
    let minRating = e.target.value;

    places.map((place) => {
      console.log(place.rating);
      if (place.rating >= minRating) {
        sortedPlaces.push(place);
      }
    });

    this.setState({
      sortedPlacesDetails: sortedPlaces,
    });

    // Reset sortedPlaces for future sorting
    sortedPlaces = [];
  };

  addPlace = (newPlace) => {
    let currentPlaces = this.state.placesDetails;
    currentPlaces.push(newPlace);

    let placeMarker = () => {
      // Position
      let latLng = {
        lat: newPlace.lat,
        lng: newPlace.lng,
      };

      // Add Marker
      var marker = new window.google.maps.Marker({
        position: latLng,
        map: map,
        title: newPlace.name,
        icon: {
          url:
            "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
          anchor: new window.google.maps.Point(10, 10),
          scaledSize: new window.google.maps.Size(20, 20),
        },
      });
      marker.setMap(map);
      map.setCenter(latLng);

      // InfoWindow
      marker.addListener("click", function () {
        let placePicture = newPlace.photos
          ? newPlace.photos[0].getUrl({ maxWidth: 300, maxHeight: 300 })
          : "https://via.placeholder.com/300";

        let content = `
          <h2>${newPlace.name}</h2>
          <img src=${placePicture}>
          <ul>
            <li>${newPlace.formatted_address}</li>
            <li>${newPlace.formatted_phone_number}</li>
          </ul>
        `;
        infowindow.setContent(content);
        infowindow.open(map, marker);
      });
    };

    this.setState(
      {
        placesDetails: currentPlaces,
      },
      placeMarker()
    );

    console.log(newPlace.lat, newPlace.lng);
  };

  render() {
    return (
      <React.Fragment>
        <NearbyMap />

        <NearbyList
          placesDetails={this.state.sortedPlacesDetails}
          handleSort={this.handleSort}
          addPlace={this.addPlace}
        ></NearbyList>
      </React.Fragment>
    );
  }
}

function loadScript(url) {
  let index = window.document.getElementsByTagName("script")[0];
  let script = window.document.createElement("script");
  script.src = url;
  script.async = true;
  script.defer = true;
  index.parentNode.insertBefore(script, index);
}

export default Nearby;

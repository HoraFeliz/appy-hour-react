import React from "react";
// import PlaceListItem from "../places/PlaceListItem";
import PlaceListItemNearBy from "../places/PlaceListItemNearBy";
import "./NearbyList.scss";

class NearbyList extends React.Component {
  state = {
    selectedPlace: 0,
  };


  addPlace = () => {
    // User Input
    let placeName = document.querySelector("#place-name");
    let placeAddress = document.querySelector("#place-address");
    let placePhone = document.querySelector("#place-phone");
    let placeLat = document.querySelector("#place-latitude");
    let placeLng = document.querySelector("#place-longitude");
    let placeRate = document.querySelector("#place-rate");
    console.log(`Place Lat: `, placeLat.value);
    console.log(`Place Lng: `, placeLng.value);

    // Add Place
    let place = {
      name: placeName.value,
      formatted_address: placeAddress.value,
      formatted_phone_number: placePhone.value,
      rating: placeRate.value,
      user_ratings_total: 0,
      reviews: [],
      lat: Number(placeLat.value),
      lng: Number(placeLng.value),
    };

    this.props.addPlace(place);

    // Hide Modal
    this.hideAddPlaceModal();

    // Reset Fields
    this.resetInputFields([
      placeName,
      placeAddress,
      placePhone,
      placeRate,
      placeLat,
      placeLng,
    ]);
  };

  // Reset Input Fields
  resetInputFields = (inputs) => {
    inputs.map((input) => {
      input.value = "";
    });
  };

  // Convert UNIX Timestamp
  convertTime = (time) => {
    return new Date(time * 1000).toISOString().slice(0, 19).replace("T", " ");
  };

  render() {
    let { placesDetails } = this.props;

    return (
      <div className="sidebar">
        <div className="places">
          {placesDetails.length ? placesDetails.map((place, index) => (
            <PlaceListItemNearBy
              key={index}
              type="num"
              num={index}
              recommended={false}
              place={place}
              tour={null}
            />
          )
          ) : null
          }
        </div>
      </div>
    );
  }
}

export default NearbyList;

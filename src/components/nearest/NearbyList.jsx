import React from "react";
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
          {placesDetails.map((place, index) => (
            <div className="place" key={index}>
              <button
                onClick={() => console.log(place)}
                className="btn btn-danger"
              >
                Add to tour
              </button>
              {console.log(place)}
              <img
                src={
                  place.photos
                    ? place.photos[0].getUrl({ maxWidth: 300, maxHeight: 300 })
                    : "https://via.placeholder.com/300"
                }
                alt={place.name}
              />
              <div className="details">
                <h2 className="name">{place.name}</h2>
                <div className="review">
                  <ul className={"stars rate-" + Math.round(place.rating)}>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                  </ul>
                  <strong>{Math.round(place.rating)}</strong>
                  <span
                    className="all-reviews"
                    onClick={() =>
                      this.updateSelectedPlace("all-reviews", index)
                    }
                  >
                    ({place.user_ratings_total})
                  </span>
                  <span
                    className="add-review"
                    onClick={() =>
                      this.updateSelectedPlace("add-review", index)
                    }
                  >
                    Add Review
                  </span>
                  {/* <span className="add-review" onClick={(e) => openReviewModal(index)}>Add Review</span> */}
                </div>
                <ul className="info">
                  <li>
                    <i className="fas fa-phone-alt"></i>
                    <a href={"tel:" + place.formatted_phone_number}>
                      {place.formatted_phone_number}
                    </a>
                  </li>
                  <li>
                    <i className="fas fa-map-marker-alt"></i>{" "}
                    {place.formatted_address}
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default NearbyList;

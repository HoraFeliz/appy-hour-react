import React, { Component } from "react";
import StarRating from "../common/StarRating";
import PlaceSchedule from "./PlaceSchedule";

class PlaceInfo extends Component {
  render() {
    return (
      <div className="appy--place-item-info">
        <h2 className="appy--place-item-info-placename">{this.props.placeInfo.name}</h2>
        <p className="appy--place-item-info-address">
          <strong>Address:</strong> {this.props.placeInfo.address}
        </p>
        <p className="appy--place-item-info-address">
          <strong>Schedule:</strong>{" "}
          <span className="appy--place-item-info-address-open">Open Now</span>{" "}
        </p>

        <PlaceSchedule place={this.props.placeInfo} />
        <hr />
        <div className="appy--place-item-info-rating-container">
          <div className="appy--row">
            <div className="appy--col-6">
              <span className="appy--place-item-info-rating-text">
                Google Rating
              </span>
            </div>
            <div className="appy--col-6">
              <StarRating place={this.props.placeInfo} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PlaceInfo;

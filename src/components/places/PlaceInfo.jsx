import React from "react";
import StarRating from "../common/StarRating";
import PlaceSchedule from "./PlaceSchedule";

const PlaceInfo = (props) => {
  return (
    <div className="appy--place-item-info">
      <h2 className="appy--place-item-info-placename">
        {props.placeInfo.name}
      </h2>
      <p className="appy--place-item-info-address">
        <strong>Address:</strong> {props.placeInfo.address}
      </p>
      <p className="appy--place-item-info-address">
        <strong>Schedule:</strong>{" "}
        <span className="appy--place-item-info-address-open">Open Now</span>{" "}
      </p>

      <PlaceSchedule place={props.placeInfo} />
      <hr />
      <div className="appy--place-item-info-rating-container">
        <div className="appy--row">
          <div className="appy--col-6">
            <span className="appy--place-item-info-rating-text">
              Google Rating
            </span>
          </div>
          <div className="appy--col-6">
            <StarRating place={props.placeInfo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceInfo;

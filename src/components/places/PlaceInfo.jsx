import React from "react";
import Price from "../common/Price";
import StarRating from "../common/StarRating";
import PlaceSchedule from "./PlaceSchedule";


const PlaceInfo = ({ placeInfo, loading }) => {
  return (

    loading ?

      <div className="appy--place-item-info">
        <h2 className="appy--tours-detail-info-placename-loading loading--background-default mt-3 mb-3">
        </h2>
        <>
          <div className="appy--tours-item-info-description-loading loading--background-default loading--background-default-large mb-2"></div>
          <div className="appy--tours-item-info-description-loading loading--background-default loading--background-default-large mb-2"></div>
          <div className="appy--tours-item-info-description-loading loading--background-default loading--background-default-large" style={{ width: '60%' }}></div>
        </>

        <PlaceSchedule loading={true} />

      </div>

      :

      <div className="appy--place-item-info">
        <h2 className="appy--place-item-info-placename">
          {placeInfo.name}
        </h2>
        <p className="appy--place-item-info-address">
          <strong>Address:</strong> {placeInfo.address}
        </p>
        <p className="appy--place-item-info-address">
          <strong>Schedule:</strong>{" "}
          <span className="appy--place-item-info-address-open">Open Now</span>{" "}
        </p>

        <PlaceSchedule place={placeInfo} />
        <hr />
        <div className="appy--place-item-info-rating-container">
          <div className="appy--row">
            <div className="appy--col-6">
              <span className="appy--place-item-info-rating-text" style={{ marginTop: '3px' }}>
                Price
            </span>
            </div>
            <div className="appy--col-6" style={{ display: 'flex', justifyContent: 'flex-end', fontSize: '20px' }}>

              <Price
                rating={placeInfo?.priceLevel
                }
              />
            </div>
          </div>
        </div>
        <hr style={{ marginTop: '14px' }} />
        <div className="appy--place-item-info-rating-container">
          <div className="appy--row">
            <div className="appy--col-6">
              <span className="appy--place-item-info-rating-text" style={{ marginTop: '4px' }}>
                Google Rating
            </span>
            </div>
            <div className="appy--col-6">
              <StarRating place={placeInfo} />
            </div>
          </div>
        </div>
      </div>
  );
};

export default PlaceInfo;

import React, { useEffect, useState } from "react";
import InfoBar from "../infobar/InfoBar";
import ImageCanvas from "../common/ImageCanvas";
import PlaceInfo from "./PlaceInfo";
import { getPlace, getTourById } from "../../services/api-client";

const PlaceId = (props) => {
  const [place, setPlace] = useState([]);
  const [tour, setTour] = useState([]);

  useEffect(() => {
    getPlace(props.match.params.id).then((place) => {
      setPlace(place);
    });
  }, [props]);

  useEffect(() => {
    getTourById(props.match.params.tour).then((tour) => {
      setTour(tour);
    });
  }, [props]);

  return (
    <div>
      <InfoBar back={true} tour={tour} />
      <div className="appy--place-item">
        <div
          className="appy--place-item-map"
          style={{
            backgroundImage: "url('/img/map-place.png'",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <ImageCanvas place={true} recommended={true} placeInfo={place} />
        <PlaceInfo place={place} placeInfo={place} />
      </div>
    </div>
  );
};

export default PlaceId;

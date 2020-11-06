import React, { useEffect, useState } from "react";
import InfoBar from "../infobar/InfoBar";
import ImageCanvas from "../common/ImageCanvas";
import PlaceInfo from "./PlaceInfo";
import {
  getIsPlaceOpen,
  getPlace,
  getTourById,
} from "../../services/api-client";
import PlaceMap from "./placemap/PlaceMap";

const PlaceId = (props) => {
  const [place, setPlace] = useState([]);
  const [tour, setTour] = useState([]);
  // const [isOpen, setIsOpen] = useState("");

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

  // Scroll Arriba
  window.scrollTo(0, 0)


  // useEffect(() => {
  //   getIsPlaceOpen(place.placeId).then((openNow) => {
  //     setIsOpen(openNow);
  //   });
  // });

  return (
    <div>
      {place && place.geometry ? (
        <PlaceMap
          lat={place.geometry.latitude}
          lng={place.geometry.longitude}
          name={place.name}
          address={place.address}
          isOpen={Math.random() >= 0.5}
        />
      ) : (
          "Loading map"
        )}
      {tour && <InfoBar back={true} tour={tour} />}
      <div className="appy--place-item">
        <ImageCanvas place={true} placeInfo={place} />
        <PlaceInfo place={place} placeInfo={place} />
      </div>
    </div>
  );
};

export default PlaceId;

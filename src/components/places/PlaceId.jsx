import React, { useEffect, useState } from "react";
import InfoBar from "../infobar/InfoBar.jsx";
import ImageCanvas from "../common/ImageCanvas";
import PlaceInfo from "./PlaceInfo";
import {
  getPlace,
  getTourById,
} from "../../services/api-client";
import PlaceMap from "./placemap/PlaceMap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhotoVideo, faRoute } from "@fortawesome/free-solid-svg-icons";

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
    <>
      {place && place.geometry ?
        <>
          <div className="appy--tours-detail">
            <div className="appy--place-item-map-canvas">
              <PlaceMap
                lat={place.geometry.location.lat}
                lng={place.geometry.location.lng}
                name={place.name}
                address={place.formatted_address}
                isOpen={Math.random() >= 0.5}
              />

            </div>
          </div>
          <InfoBar back={true} tour={tour} />
          <div className="appy--place-item">
            <div className="appy--tours-detail appy--place-item-photo">
              <ImageCanvas place={true} placeInfo={place} />
            </div>
            <PlaceInfo place={place} placeInfo={place} />
          </div>
        </>

        :

        // Loading
        <>
          <div className="appy--tours-detail loading--background-default loading--background-default-touch icon-map" style={{ height: '300px' }}>
            <div className="appy--place-item-map-canvas mb-3 ">
              <FontAwesomeIcon icon={faRoute}></FontAwesomeIcon>
            </div>
          </div>
          <InfoBar loading={true} />
          <div className="appy--place-item">
            <div className="appy--tours-detail appy--place-item-photo icon-map" style={{ height: '100px', fontSize: '27px', opacity: '.5', paddingTop: '15px', }}>
              <FontAwesomeIcon icon={faPhotoVideo} />
            </div>
            <PlaceInfo loading={true} />
          </div>
        </>

      }


    </>
  );
};

export default PlaceId;

import React, { useState, useEffect } from "react";
import TourBarInfo from "./TourBarInfo";
import AppyButton from "../common/AppyButton";
import MutipleSlidesPerView from "./MutipleSlidesPerView";
import { NavLink } from "react-router-dom";
import { getTours } from "../../services/api-client";

const Tours = () => {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    getTours()
      .then((res) => {
        setTours(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <TourBarInfo recommended={true}>
        <AppyButton num={tours.length} info={true} recommended={true} />
        {/* <AppyButton type="map" info={true} recommended={true} /> */}
      </TourBarInfo>
      <MutipleSlidesPerView recommended={true} brand="recommended" />

      <TourBarInfo>
        <AppyButton num={tours.length} info={true} />
        {/* <AppyButton type="map" info={true} /> */}
      </TourBarInfo>

      <MutipleSlidesPerView recommended={false} brand="primary-bg" />
    </div>
  );
};

export default Tours;

import React from "react";
import TourBarInfo from "./TourBarInfo";
import AppyButton from "../common/AppyButton";
import MutipleSlidesPerView from "./MutipleSlidesPerView";
import { NavLink } from "react-router-dom";

const Tours = () => {
  return (
    <div>
      <TourBarInfo recommended={true}>
        <AppyButton num="5" info={true} recommended={true} />
        <AppyButton type="map" info={true} recommended={true} />
      </TourBarInfo>
      <MutipleSlidesPerView recommended={true} brand="recommended" />

      <TourBarInfo>
        <AppyButton num="5" info={true} />
        <AppyButton type="map" info={true} />
      </TourBarInfo>

      <MutipleSlidesPerView recommended={false} brand="primary-bg" />
    </div>
  );
};

export default Tours;

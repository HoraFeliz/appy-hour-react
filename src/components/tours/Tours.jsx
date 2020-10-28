import React from "react";
import TourBarInfo from "./TourBarInfo";
import Button from "../common/Button";
import MutipleSlidesPerView from "./MutipleSlidesPerView";
import { NavLink } from "react-router-dom";

const Tours = () => {
  return (
    <div>
      <NavLink className="btn btn-danger" to={`/tour/places/add`}>
        Add Places
      </NavLink>
      <TourBarInfo recommended={true}>
        <Button num="5" info={true} recommended={true} />
        <Button type="map" info={true} recommended={true} />
      </TourBarInfo>

      <MutipleSlidesPerView />

      <TourBarInfo>
        <Button num="5" info={true} />
        <Button type="map" info={true} />
      </TourBarInfo>

      <MutipleSlidesPerView />
    </div>
  );
};

export default Tours;

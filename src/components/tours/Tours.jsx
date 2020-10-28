import React from "react";
import TourBarInfo from "./TourBarInfo";
import Button from "../common/Button";
import MutipleSlidesPerView from "./MutipleSlidesPerView";

const Tours = () => {
  return (
    <div>
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

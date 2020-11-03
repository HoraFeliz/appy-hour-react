import React, { useState, useEffect } from "react";
import TourBarInfo from "./TourBarInfo";
import AppyButton from "../common/AppyButton";
import { getTours } from "../../services/api-client";
import RecommendedSlider from "./RecommendedSlider";
import RegularSlider from "./RegularSlider";

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
      <RecommendedSlider recommended={true} brand="recommended" />

      <TourBarInfo>
        <AppyButton num={tours.length} info={true} />
        {/* <AppyButton type="map" info={true} /> */}
      </TourBarInfo>

      <RegularSlider recommended={false} brand="primary-bg" />
    </div>
  );
};

export default Tours;

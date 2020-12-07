import React, { useState, useEffect } from "react";
import TourBarInfo from "./TourBarInfo";
import AppyButton from "../common/AppyButton";
import { getRecommendedTours, getRegularTours } from "../../services/api-client";
import RecommendedSlider from "./RecommendedSlider";
import RegularSlider from "./RegularSlider";

const Tours = () => {
  const [recommendedTours, setRecommendedTours] = useState([]);
  const [regularTours, setRegularTours] = useState([]);

  // Set 0 Image Zoom Helper
  localStorage.setItem('imageZoom', 'active')

  useEffect(() => {
    getRecommendedTours()
      .then((res) => {
        setRecommendedTours(res);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    getRegularTours()
      .then((res) => {
        setRegularTours(res);
      })
      .catch((err) => console.log(err));
  }, []);


  return (
    <div>
      <TourBarInfo recommended={true}>
        <AppyButton num={recommendedTours.length} info={true} recommended={true} />
        <AppyButton num='info' type="map" info={true} recommended={true} />
      </TourBarInfo>
      <RecommendedSlider recommended={true} brand="recommended" />

      <TourBarInfo>
        <AppyButton num={regularTours.length} info={true} />
        <AppyButton num='info' type="map" info={true} />
      </TourBarInfo>

      <RegularSlider recommended={false} brand="primary-bg" />
    </div>
  );
};

export default Tours;

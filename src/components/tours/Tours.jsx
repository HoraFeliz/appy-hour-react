import React, { useState, useEffect } from "react";
import TourBarInfo from "./TourBarInfo";
import AppyButton from "../common/AppyButton";
import { getRecommendedTours, getRegularTours } from "../../services/api-client";
import ToursSlider from "./ToursSlider";

const Tours = () => {
  const [recommendedTours, setRecommendedTours] = useState([]);
  const [regularTours, setRegularTours] = useState([]);

  // Set active Image Zoom Helper
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
    <>
      {recommendedTours.length ?
        <TourBarInfo recommended={true}>
          <AppyButton num={recommendedTours.length} info={true} recommended={true} />
          <AppyButton num='info' type="map" info={true} recommended={true} />
        </TourBarInfo>
        :
        <TourBarInfo loading={true} recommended={true}>
          <AppyButton loading={true} />
          <AppyButton loading={true} info={true} />
        </TourBarInfo>
      }
      <ToursSlider tours={recommendedTours} recommended={true} brand="recommended" />

      {regularTours.length ?
        <TourBarInfo>
          <AppyButton num={regularTours.length} info={true} />
          <AppyButton num='info' type="map" info={true} />
        </TourBarInfo>
        :
        <TourBarInfo loading={true}>
          <AppyButton loading={true} />
          <AppyButton loading={true} info={true} />
        </TourBarInfo>
      }
      <ToursSlider tours={regularTours} recommended={false} brand="primary-bg" />
    </>
  );
};

export default Tours;

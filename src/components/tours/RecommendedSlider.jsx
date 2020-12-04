import React, { useState, useEffect } from "react";
import Swiper from "react-id-swiper";
import TourItem from "./TourItem";
import "swiper/swiper.scss";
import { getRecommendedTours } from "../../services/api-client";
import { NavLink } from "react-router-dom";

const RecommendedSlider = ({recommended, brand}) => {
  const [recommendedTours, setRecommendedTours] = useState([]);

  useEffect(() => {
    getRecommendedTours()
      .then((res) => {
        setRecommendedTours(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const params = {
    slidesPerView: 2,
    spaceBetween: 5,
    freeMode: true,
    // freeModeMinimumVelocity: 0.7,
    followFinger: true,
    freeModeMomentumVelocityRatio: 1,
    freeModeMomentumRatio: 0.15,
    freeModeMomentumBounceRatio: 0.1,
    freeModeSticky: true,
    speed: 100,
    // pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    //     type: 'bullets',
    //     dynamicBullets: true
    // }
  };
  return (
    <>
      {recommendedTours.length ?
        <Swiper {...params}>
          {recommendedTours.map((tour, key) => (
              <div key={key}>
                <NavLink to={`/tour/${tour._id}`}>
                  <TourItem
                    key={key}
                    id={key}
                    tour={recommendedTours}
                    recommended={recommended}
                    brand={brand}
                    first={key === 0 ? true : false}
                  />
                </NavLink>
              </div>
            ))}
        </Swiper>

        : <h1>Loading</h1>
      }
    </>
  );
};
export default RecommendedSlider;

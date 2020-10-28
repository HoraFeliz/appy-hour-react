import React, { useState, useEffect } from "react";
import Swiper from "react-id-swiper";
import TourItem from "./TourItem";
import "swiper/swiper.scss";
import { getTours } from "../../services/api-client";
import { NavLink } from "react-router-dom";

const MutipleSlidesPerView = (props) => {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    getTours()
      .then((res) => {
        setTours(res);
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
    <Swiper {...params}>
      {tours.length
        ? tours.map((tour, key) => (
            <div key={key}>
              <NavLink to={`/tour/${tour._id}`}>
                <TourItem
                  tour={tour}
                  recommended={true}
                  brand="recommended"
                  first={key === 0 ? true : false}
                />
              </NavLink>
            </div>
          ))
        : "Loading"}
    </Swiper>
  );
};
export default MutipleSlidesPerView;

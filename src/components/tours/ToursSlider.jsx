import React from "react";
import Swiper from "react-id-swiper";
import TourItem from "./TourItem";
import "swiper/swiper.scss";
import { NavLink } from "react-router-dom";

const ToursSlider = ({ recommended, brand, tours }) => {

  const params = {
    slidesPerView: 2,
    spaceBetween: 6,
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

      {tours.length ?
        <Swiper {...params}>
          {tours.map((tour, key) => (

            <div key={key}>
              <NavLink to={`/tour/${tour._id}`}>
                <TourItem
                  key={key}
                  id={key}
                  tour={tours}
                  recommended={recommended}
                  brand={brand}
                  first={key === 0 ? true : false}
                />
              </NavLink>
              
            </div>
            
          ))}

        </Swiper>
        :

        // Loading
        <>
          <div className="container-items d-flex">
            <TourItem loading={true} first={true} />
            <TourItem loading={true} />

          </div>

        </>

      }
    </>
  );
};
export default ToursSlider;

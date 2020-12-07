import React, { useState, useEffect } from "react";
import Swiper from "react-id-swiper";
import TourItem from "./TourItem";
import "swiper/swiper.scss";
import { getRecommendedTours } from "../../services/api-client";
import { NavLink } from "react-router-dom";

const RecommendedSlider = ({ recommended, brand }) => {
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
                  brand={'recommended'}
                  first={key === 0 ? true : false}
                />
              </NavLink>
            </div>
          ))}
        </Swiper>
        :
        <>
          <div className="appy--tours-item appy--tours-item-first">
            <div id="place-image" className="appy--tours-item-image" style={{ backgroundImage: 'url("https://res.cloudinary.com/dyiagjrai/image/upload/v1605870562/appyhourtours/AF1QipNgoMDBcxZMTOsoEJE3NQXE3UTPcI1ZClaa6fOM_kpbx9j.jpg")' }}>
              <div className="appy--image-tours-recommended mahou"><img src="../../img/logo-mahou.svg" alt="Mahou" />
              </div>
              <div>
                <div className="appy--tours-item-rating"><img src="/img/rating-beer-on.svg" alt={1} /><img src="/img/rating-beer-on.svg" alt={1} /><img src="/img/rating-beer-on.svg" alt={1} /><img src="/img/rating-beer-on.svg" alt={1} /><img src="/img/rating-beer-off.svg" alt={5} />
                </div>
              </div>
            </div>
            <div className="appy--tours-item-distancebar mahou">
              <div className="appy--tours-item-distancebar-distante-tour">
                <div className="appy--tours-item-distancebar-icon"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="walking" className="svg-inline--fa fa-walking fa-w-10 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                  <path fill="currentColor" d="M208 96c26.5 0 48-21.5 48-48S234.5 0 208 0s-48 21.5-48 48 21.5 48 48 48zm94.5 149.1l-23.3-11.8-9.7-29.4c-14.7-44.6-55.7-75.8-102.2-75.9-36-.1-55.9 10.1-93.3 25.2-21.6 8.7-39.3 25.2-49.7 46.2L17.6 213c-7.8 15.8-1.5 35 14.2 42.9 15.6 7.9 34.6 1.5 42.5-14.3L81 228c3.5-7 9.3-12.5 16.5-15.4l26.8-10.8-15.2 60.7c-5.2 20.8.4 42.9 14.9 58.8l59.9 65.4c7.2 7.9 12.3 17.4 14.9 27.7l18.3 73.3c4.3 17.1 21.7 27.6 38.8 23.3 17.1-4.3 27.6-21.7 23.3-38.8l-22.2-89c-2.6-10.3-7.7-19.9-14.9-27.7l-45.5-49.7 17.2-68.7 5.5 16.5c5.3 16.1 16.7 29.4 31.7 37l23.3 11.8c15.6 7.9 34.6 1.5 42.5-14.3 7.7-15.7 1.4-35.1-14.3-43zM73.6 385.8c-3.2 8.1-8 15.4-14.2 21.5l-50 50.1c-12.5 12.5-12.5 32.8 0 45.3s32.7 12.5 45.2 0l59.4-59.4c6.1-6.1 10.9-13.4 14.2-21.5l13.5-33.8c-55.3-60.3-38.7-41.8-47.4-53.7l-20.7 51.5z">
                  </path>
                </svg></div>
                <div className="appy--tours-item-distancebar-text">12 Km.</div>
              </div>
              <div className="appy--tours-item-distancebar-distante-tour">
                <div className="appy--tours-item-distancebar-icon"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="stopwatch" className="svg-inline--fa fa-stopwatch fa-w-14 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path fill="currentColor" d="M432 304c0 114.9-93.1 208-208 208S16 418.9 16 304c0-104 76.3-190.2 176-205.5V64h-28c-6.6 0-12-5.4-12-12V12c0-6.6 5.4-12 12-12h120c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-28v34.5c37.5 5.8 71.7 21.6 99.7 44.6l27.5-27.5c4.7-4.7 12.3-4.7 17 0l28.3 28.3c4.7 4.7 4.7 12.3 0 17l-29.4 29.4-.6.6C419.7 223.3 432 262.2 432 304zm-176 36V188.5c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12V340c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12z">
                  </path>
                </svg></div>
                <div className="appy--tours-item-distancebar-text">30 Min.</div>
              </div>
            </div>
            <div className="appy--tours-item-info">
              <h3 className="appy--tours-item-info-title">La Latina</h3>
              <p className="appy--tours-item-info-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Neque ex aspernatur repudiandae dicta...</p>
              <div className="appy--tours-item-info-creator">
                <div className="appy--tours-item-info-creator-icon"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="route" className="svg-inline--fa fa-route fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M416 320h-96c-17.6 0-32-14.4-32-32s14.4-32 32-32h96s96-107 96-160-43-96-96-96-96 43-96 96c0 25.5 22.2 63.4 45.3 96H320c-52.9 0-96 43.1-96 96s43.1 96 96 96h96c17.6 0 32 14.4 32 32s-14.4 32-32 32H185.5c-16 24.8-33.8 47.7-47.3 64H416c52.9 0 96-43.1 96-96s-43.1-96-96-96zm0-256c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zM96 256c-53 0-96 43-96 96s96 160 96 160 96-107 96-160-43-96-96-96zm0 128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z">
                  </path>
                </svg></div>
                <div className="appy--tours-item-info-creator-text">Appy Hour Tours</div>
              </div>
            </div>
          </div>
        </>

      }
    </>
  );
};
export default RecommendedSlider;

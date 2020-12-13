import {
  faMapMarkerAlt,
  faStar,
  faWalking,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AppyButton from "../common/AppyButton";
import React from "react";
import Price from "../common/Price";
import { textLength } from "../../services/textLength";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";

export default function PlaceListItem({ tour, place, recommended, type, num, total, directions }) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <NavLink
      to={
        tour === null
          ? `/place/${place._id}`
          : `/place/${place._id}/${tour._id}`
      }
    >
      <div className="row appy--place-list-item">
        <div className="col-3 appy--place-list-item-img-col">
          <div
            className="appy--place-list-item-img"
            style={{
              backgroundImage: `url("${place ? place.image : "Loading"
                }")`,
            }}
          >
            {recommended && (
              <div className="appy--place-list-item-recommended">
                <FontAwesomeIcon icon={faStar} />
              </div>
            )}
            <div
              className={`appy--place-list-item-rating ${recommended && "recommended"
                }`}
              style={{ borderRadius: "0px 0px 0px 4px" }}
            >
              <span className="appy--place-list-item-rating-num">
                {place ? place.rating : "Loading"}
              </span>
              {place.rating >= 1 ? (
                <img src="/img/star-white-on.svg" alt="1" />
              ) : place.rating >= 0.5 ? (
                <img src="/img/star-white-half.svg" alt="1" />
              ) : (
                    <img src="/img/star-off.svg" alt="1" />
                  )}
              {place.rating >= 2 ? (
                <img src="/img/star-white-on.svg" alt="1" />
              ) : place.rating >= 1.5 ? (
                <img src="/img/star-white-half.svg" alt="1" />
              ) : (
                    <img src="/img/star-off.svg" alt="2" />
                  )}
              {place.rating >= 3 ? (
                <img src="/img/star-white-on.svg" alt="1" />
              ) : place.rating >= 2.5 ? (
                <img src="/img/star-white-half.svg" alt="1" />
              ) : (
                    <img src="/img/star-off.svg" alt="3" />
                  )}
              {place.rating >= 4 ? (
                <img src="/img/star-white-on.svg" alt="1" />
              ) : place.rating >= 3.5 ? (
                <img src="/img/star-white-half.svg" alt="1" />
              ) : (
                    <img src="/img/star-off.svg" alt="4" />
                  )}
              {place.rating >= 5 ? (
                <img src="/img/star-white-on.svg" alt="1" />
              ) : place.rating >= 4.5 ? (
                <img src="/img/star-white-half.svg" alt="1" />
              ) : (
                    <img src="/img/star-off.svg" alt="5" />
                  )}
            </div>
          </div>
        </div>
        <div className="appy--col-9 appy--col-9-place-list-item">
          {/* Slider */}
          <Slider {...settings}>
            {/* Slide #1 */}
            <div>
              <div className="row">
                <div className="appy--col-10 appy--place-list-item-info">
                  <h3 className="appy--place-list-item-info-title">
                    {place
                      ? textLength(place.name, 12, 18, 20)
                      : "Loading"}
                  </h3>
                  <p className="appy--place-list-item-info-description">
                    {place
                      ? textLength(place.address, 43, 53, 63)
                      : "Loading"}
                  </p>
                  <div className="row appy--place-list-item-schedule-price">
                    <div className="appy--col-2 appy--place-list-item-schedule-price-price-icon">
                      <span>Price: </span>
                    </div>
                    <div className="appy--col-5 appy--place-list-item-schedule-price-price-info">
                      <Price
                        rating={
                          place
                            ? place.priceLevel
                            : "Loading"
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="appy--col-2 appy--place-list-item-position">
                  {type === "num" ? (
                    <p className="appy--place-list-item-position-num">
                      { num + 1}
                    </p>
                  ) : (
                      <p className="appy--place-list-item-position-num">
                        <AppyButton type="delete" />
                      </p>
                    )}
                </div>
              </div>
            </div>

            {/* Slide #2 */}
            {num < total - 1 ? (
              <div className="appy--place-list-item-distance-slide">
                <div className="row">
                  <div className="appy--col-3 appy--place-list-item-position">
                    {type === "num" ? (
                      <p className="appy--place-list-item-time-num">
                        { num + 1}
                      </p>
                    ) : (
                        <p className="appy--place-list-item-position-num">
                          <AppyButton type="delete" />
                        </p>
                      )}
                  </div>

                  <div className="appy--col-7 appy--place-list-item-time">
                    <div className="appy--place-list-item-time-info">
                      <FontAwesomeIcon icon={faWalking} />
                      <h3 className="appy--place-list-item-time-title">
                        {directions?.duration.text}
                      </h3>
                    </div>
                    <hr className="appy--place-list-item-time-hr" />
                    <div className="row appy--place-list-item-schedule-price">
                      <div className="col-12 appy--place-list-item-schedule-price-open-icon">
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                        <div
                          className="appy--col-5 appy--place-list-item-schedule-price-schedule-info"
                          style={{ color: "#707070" }}
                        >
                          {directions?.distance.text}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-2 appy--place-list-item-position">
                    {type === "num" ? (
                      <p
                        className="appy--place-list-item-position-num"
                        style={{ marginRight: "7px" }}
                      >
                        {type ? num + 2 : ""}
                      </p>
                    ) : (
                        <p className="appy--place-list-item-position-num">
                          <AppyButton type="delete" />
                        </p>
                      )}
                  </div>
                </div>
              </div>
            ) : null}
          </Slider>
        </div>
      </div>
    </NavLink>
  );
}
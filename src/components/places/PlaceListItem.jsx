import { faMapMarkerAlt, faStar, faWalking } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AppyButton from '../common/AppyButton';
import React, { Component } from 'react';
import Price from '../common/Price';
import { textLength } from '../../services/textLength'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";

class PlaceListItem extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    };

    return (
      <NavLink to={`/place/${this.props.place._id}/${this.props.tour._id}`}>
        <div className="row appy--place-list-item">
          <div className="col-3 appy--place-list-item-img-col">
            <div
              className="appy--place-list-item-img"
              style={{
                backgroundImage: `url("${this.props.place ? this.props.place.image : "Loading"
                  }")`,
              }}
            >
              {this.props.recommended && (
                <div className="appy--place-list-item-recommended">
                  <FontAwesomeIcon icon={faStar} />
                </div>
              )}
              <div
                className={`appy--place-list-item-rating ${this.props.recommended && "recommended"
                  }`}
                style={{ borderRadius: "0px 0px 0px 4px" }}
              >
                <span className="appy--place-list-item-rating-num">
                  {this.props.place ? this.props.place.rating : "Loading"}
                </span>
                {this.props.place.rating >= 1 ? (
                  <img src="/img/star-white-on.svg" alt="1" />
                ) : this.props.place.rating >= 0.5 ? (
                  <img src="/img/star-white-half.svg" alt="1" />
                ) : (
                      <img src="/img/star-off.svg" alt="1" />
                    )}
                {this.props.place.rating >= 2 ? (
                  <img src="/img/star-white-on.svg" alt="1" />
                ) : this.props.place.rating >= 1.5 ? (
                  <img src="/img/star-white-half.svg" alt="1" />
                ) : (
                      <img src="/img/star-off.svg" alt="2" />
                    )}
                {this.props.place.rating >= 3 ? (
                  <img src="/img/star-white-on.svg" alt="1" />
                ) : this.props.place.rating >= 2.5 ? (
                  <img src="/img/star-white-half.svg" alt="1" />
                ) : (
                      <img src="/img/star-off.svg" alt="3" />
                    )}
                {this.props.place.rating >= 4 ? (
                  <img src="/img/star-white-on.svg" alt="1" />
                ) : this.props.place.rating >= 3.5 ? (
                  <img src="/img/star-white-half.svg" alt="1" />
                ) : (
                      <img src="/img/star-off.svg" alt="4" />
                    )}
                {this.props.place.rating >= 5 ? (
                  <img src="/img/star-white-on.svg" alt="1" />
                ) : this.props.place.rating >= 4.5 ? (
                  <img src="/img/star-white-half.svg" alt="1" />
                ) : (
                      <img src="/img/star-off.svg" alt="5" />
                    )}
              </div>
            </div>
          </div>
          <div className="col-9">
            {/* Slider */}
            <Slider {...settings}>
              {/* Slide #1 */}
              <div>
                <div className="row">
                  <div className="appy--col-10 appy--place-list-item-info">
                    <h3 className="appy--place-list-item-info-title">
                      {this.props.place
                        ? textLength(this.props.place.name, 12, 18, 20)
                        : "Loading"}
                    </h3>
                    <p className="appy--place-list-item-info-description">
                      {this.props.place
                        ? textLength(this.props.place.address, 43, 53, 63)
                        : "Loading"}
                    </p>
                    <div className="row appy--place-list-item-schedule-price">
                      {/* <div className="appy--col-1 appy--place-list-item-schedule-price-open-icon">
                                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                                        </div>
                                        <div className="appy--col-5 appy--place-list-item-schedule-price-schedule-info">{this.props.place ? textLength(this.props.place.city, 6, 10, 15) : 'Loading'}</div> */}
                      <div className="appy--col-2 appy--place-list-item-schedule-price-price-icon">
                        {/* <img src="/img/price-icon.svg" alt="Price" /> */}
                        <span>Price: </span>
                      </div>
                      <div className="appy--col-5 appy--place-list-item-schedule-price-price-info">
                        <Price
                          rating={
                            this.props.place
                              ? this.props.place.priceLevel
                              : "Loading"
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="appy--col-2 appy--place-list-item-position">
                    {this.props.type === "num" ? (
                      <p className="appy--place-list-item-position-num">
                        {this.props ? this.props.num + 1 : "Loading"}
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
              {this.props.num < this.props.total - 1 ? (
                <div>
                  <div className="row">
                    <div className="appy--col-3 appy--place-list-item-position">
                      {this.props.type === "num" ? (
                        <p className="appy--place-list-item-time-num">
                          {this.props ? this.props.num + 1 : "Loading"}
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
                          7 Min.
                        </h3>
                      </div>
                      {/* <p className="appy--place-list-item-info-description">{this.props.place ? this.props.place.address : 'Loading'}</p> */}
                      <hr className="appy--place-list-item-time-hr" />
                      <div className="row appy--place-list-item-schedule-price">
                        <div className="col-12 appy--place-list-item-schedule-price-open-icon">
                          <FontAwesomeIcon icon={faMapMarkerAlt} />
                          <div
                            className="appy--col-5 appy--place-list-item-schedule-price-schedule-info"
                            style={{ color: "#707070" }}
                          >
                            300 m.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-2 appy--place-list-item-position">
                      {this.props.type === "num" ? (
                        <p
                          className="appy--place-list-item-position-num"
                          style={{ marginRight: "7px" }}
                        >
                          {this.props ? this.props.num + 2 : "Loading"}
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
}

export default PlaceListItem;

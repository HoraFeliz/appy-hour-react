import React from "react";
import TourBarInfo from "./TourBarInfo";
import TourItem from "./TourItem";
import ReactSwipe from "react-swipe";
import Button from "../common/Button";
import { getTours } from "../../services/api-client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";

var settings = {
  // dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
};

class Tours extends React.Component {
  // let reactSwipeEl;

  state = {
    tours: [],
  };

  fetchTours = () => {
    getTours().then((tours) => {
      this.setState({ tours });
    });
  };

  componentDidMount() {
    this.fetchTours();
  }

  render() {
    return (
      <div>
        <TourBarInfo recommended={true}>
          <Button num="5" info={true} recommended={true} />
          <Button type="map" info={true} recommended={true} />
        </TourBarInfo>
        {/* <Slider {...settings}>
                    <div>
                        <TourItem />
                    </div>
                    <div>
                        <TourItem />
                    </div>
                    <div>
                        <TourItem />
                    </div>
                    <div>
                        <TourItem />
                    </div>
                    <div>
                        <TourItem />
                    </div>
                    <div>
                        <TourItem />
                    </div>
                </Slider> */}

        <Slider {...settings}>
          {this.state.tours.length ? (
            this.state.tours.map((tour, key) => (
              <div>
                <NavLink key={key} to={`/tour/${tour._id}`}>
                  <TourItem
                    key={key}
                    tour={tour}
                    recommended={true}
                    brand="mahou"
                  />
                </NavLink>
              </div>
            ))
          ) : (
            <p className="text-center">Loading...</p>
          )}
        </Slider>

        <TourBarInfo>
          <Button num="5" info={true} />
          <Button type="map" info={true} />
        </TourBarInfo>
        <ReactSwipe
          className="carousel"
          swipeOptions={{ continuous: false }}
          widthOfSiblingSlidePreview="50px"
        >
          <div style={{ display: "inline-flex" }}>
            <TourItem />
            <TourItem />
          </div>
          <div style={{ display: "inline-flex" }}>
            <TourItem />
            <TourItem />
          </div>
          <div style={{ display: "inline-flex" }}>
            <TourItem />
            <TourItem />
          </div>
        </ReactSwipe>
      </div>
    );
  }
}

export default Tours;

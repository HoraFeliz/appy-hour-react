import React from "react";
import TourBarInfo from "./TourBarInfo";
import TourItem from "./TourItem";
import Button from "../common/Button";
import { getTours } from "../../services/api-client";
import { NavLink } from "react-router-dom";
import Swiper from "swiper";
import MutipleSlidesPerView from "./MutipleSlidesPerView";

var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    easing: 'ease-in-out',

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

                {/* <Slider {...settingsRecommended}>
                    {this.state.tours.length ? (
                        this.state.tours.map((tour, key) => (
                            <NavLink key={key} to={`/tour/${tour._id}`}>
                                <TourItem
                                    key={key}
                                    tour={tour}
                                    recommended={true}
                                    brand="recommended"
                                    first={key === 0 ? true : false}
                                />
                            </NavLink>
                        ))
                    ) : (
                            <p className="text-center">Loading...</p>
                        )}
                </Slider> */}
                <MutipleSlidesPerView />


                <TourBarInfo>
                    <Button num="5" info={true} />
                    <Button type="map" info={true} />
                </TourBarInfo>
                {/* <Slider {...settings}>
                    {this.state.tours.length ? (
                        this.state.tours.map((tour, key) => (
                            <NavLink key={key} to={`/tour/${tour._id}`}>
                                <TourItem
                                    key={key}
                                    tour={tour}
                                    first={key === 0 ? true : false}
                                />
                            </NavLink>
                        ))
                    ) : (
                            <p className="text-center">Loading...</p>
                        )}
                </Slider> */}
            </div>
        );
    }
}

export default Tours;

import React from "react";
import TourBarInfo from "./TourBarInfo";
import TourItem from "./TourItem";
import ReactSwipe from "react-swipe";
import Button from "../common/Button";
import { getTours } from "../../services/api-client";

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
        <ReactSwipe className="carousel" swipeOptions={{ continuous: false }}>
          <div style={{ display: "inline-flex" }}>
            {this.state.tours.length ? (
              this.state.tours.map((tour, key) => (
                <TourItem
                  key={key}
                  tour={tour}
                  recommended={true}
                  brand="mahou"
                />
              ))
            ) : (
              <p className="text-center">Loading...</p>
            )}
          </div>
        </ReactSwipe>

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

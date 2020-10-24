import React from "react";
import { getTours } from "../../services/api-client";
import TourCard from "../tour-card/TourCard";

class Tours extends React.Component {
  state = {
    tours: [],
  };

  geetTours = () => {
    getTours().then((tours) => {
      this.setState({ tours });
    });
  };
  componentDidMount() {
    this.geetTours();
  }
  render() {
    return (
      <div>
        <div className="cards">
          {this.state.tours.map((tour, key) => (
            <TourCard key={key} tour={tour} />
          ))}
        </div>
      </div>
    );
  }
}

export default Tours;

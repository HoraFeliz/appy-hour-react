import React from "react";
import { getTours } from "../../services/api-client";

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
      <div className="cards">
        {this.state.tours.map((tour, key) => (
          <pre key={key}>{JSON.stringify(tour)}</pre>
        ))}
      </div>
    );
  }
}

export default Tours;

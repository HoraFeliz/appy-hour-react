import React from "react";
import { getTourById } from "../../services/api-client";
import TourDetail from "../tour-detail/TourDetail";

class Tour extends React.Component {
  state = {
    tour: [],
  };

  fetchTourById = () => {
    getTourById(this.props.match.params.id).then((tour) => {
      this.setState({ tour });
    });
  };

  componentDidMount() {
    this.fetchTourById();
  }

  componentWillUnmount() {
    this.setState({ tour: [] });
  }

  render() {
    return <TourDetail tour={this.state.tour} />;
  }
}

export default Tour;

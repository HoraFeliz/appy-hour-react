import React from "react";
import Search from "../search/search";

class TourDetail extends React.Component {
  render() {
    return (
      <div className="detail-container">
        <div className="detail">
          <div className="name">{this.props.tour.name}</div>
          <div className="description">{this.props.tour.description}</div>
        </div>

        <Search />
      </div>
    );
  }
}

export default TourDetail;

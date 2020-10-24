import React from "react";
import AutocompleteSearch from "../search/autocomplete-search";

class TourDetail extends React.Component {
  render() {
    return (
      <div className="detail-container">
        <div className="detail">
          <div className="name">{this.props.tour.name}</div>
          <div className="description">{this.props.tour.description}</div>
        </div>

        <AutocompleteSearch />
      </div>
    );
  }
}

export default TourDetail;

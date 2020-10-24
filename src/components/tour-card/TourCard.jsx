import React from "react";
import { NavLink } from "react-router-dom";

class TourCard extends React.Component {
  render() {
    return (
      <NavLink className="navlink" to={`/tour/${this.props.tour._id}`}>
        <article className="card">
          <div className="name">{this.props.tour.name}</div>
          <div className="description">{this.props.tour.description}</div>
        </article>
      </NavLink>
    );
  }
}

export default TourCard;

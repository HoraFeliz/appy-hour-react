import React from "react";
import { NavLink } from "react-router-dom";
import Form from "../forms/form/Form";

class CreateTour extends React.Component {
  state = {
    tourCreated: false,
  };

  onTourCreated = () => {
    this.setState((prevState) => ({
      tourCreated: !prevState.tourCreated,
    }));
  };

  componentDidMount() {
    this.setState();
  }

  render() {
    return (
      <div className="new">
        {!this.state.tourCreated ? (
          <Form onTourCreated={this.onTourCreated} />
        ) : (
          ""
        )}

        <div className="d-flex justify-content-center">
          {this.state.tourCreated ? (
            <NavLink to={`/tour/add/54545454545`}>
              <button className="btn btn-danger">Add Places</button>
            </NavLink>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default CreateTour;

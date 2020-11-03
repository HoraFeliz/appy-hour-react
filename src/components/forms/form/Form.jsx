import React from "react";
import { createTour } from "../../../services/api-client";
import { withRouter } from "react-router-dom";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recommended: false,
      name: "",
      description: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    createTour(this.state)
      .then((tour) => {
        this.props.history.push(`/tour/add/${tour.id}`);
      })
      .catch((err) => console.log("Error creating tour", err));
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            required
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          description
          <input
            required
            name="description"
            type="text"
            value={this.state.description}
            onChange={this.handleInputChange}
          />
        </label>
        <br />

        <label>
          Is Recommended
          <input
            name="recommended"
            type="checkbox"
            checked={this.state.reocommended}
            onChange={this.handleInputChange}
          />
        </label>
        <br />

        <button
          onClick={this.handleTourCreated}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    );
  }
}

export default withRouter(Form);

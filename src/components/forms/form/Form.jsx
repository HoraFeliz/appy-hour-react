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
      <div>
        <div className="create-style login-container">
          <form onSubmit={this.handleSubmit}>
            <h1>Create Tour</h1>
            <div className="create-style form-group">
              <input
                required
                name="name"
                type="text"
                value={this.state.name}
                onChange={this.handleInputChange}
              />
              <label className="create-style control-label">Name</label>
              <i className="create-style bar"></i>
            </div>
            <div className="create-style form-group">
              <input
                required
                name="description"
                type="text"
                value={this.state.description}
                onChange={this.handleInputChange}
              />
              <label className="create-style control-label">Description</label>
              <i className="create-style bar"></i>
            </div>
            <div className="create-style checkbox">
              <label>
                <input
                  name="recommended"
                  type="checkbox"
                  checked={this.state.recommended}
                  onChange={this.handleInputChange}
                />
                <i className="create-style helper"></i>Is Recommended
              </label>
            </div>
            <div className="create-style button-container">
              <button
                onClick={this.handleTourCreated}
                type="submit"
                className="button"
              >
                <span>Submit</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Form);

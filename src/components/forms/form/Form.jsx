import React from "react";
import { createTour } from "../../../services/api-client";

import TextInput from "../form-components/text-input/TextInput";
import TextArea from "../form-components/textarea/TextArea";

const validations = {
  name: (value) => value.length > 1,
  description: (value) => value.length > 1,
};

class Form extends React.Component {
  state = {
    data: {
      name: "",
      description: "",
    },
    error: {
      name: true,
      description: true,
    },
    touch: {},
  };

  handleTourCreated = () => {
    this.props.onTourCreated();
  };

  handleSubmit = (event) => {
    event.preventDefault();
    createTour(this.state.data)
      .then((res) => console.log("New tour created", res))
      .catch((err) => console.log("Error creating tour", err));
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    const validationFn = validations[name];
    const isValid = validationFn(value);

    this.setState({
      data: {
        ...this.state.data,
        [name]: value,
      },
      error: {
        ...this.state.error,
        [name]: !isValid,
      },
    });
  };

  handleBlur = (event) => {
    const { name } = event.target;

    this.setState({
      touch: {
        ...this.state.touch,
        [name]: true,
      },
    });
  };

  render() {
    const { data, error, touch } = this.state;

    const isError = Object.values(error).some((el) => el === true);

    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <form onSubmit={this.handleSubmit}>
              <TextInput
                name="name"
                value={data.name}
                onBlur={this.handleBlur}
                onChange={this.handleChange}
                error={error.name}
                touch={touch.name}
              />

              <TextArea
                name="description"
                value={data.description}
                onBlur={this.handleBlur}
                onChange={this.handleChange}
                error={error.description}
                touch={touch.description}
              />

              <button
                onClick={this.handleTourCreated}
                type="submit"
                className="btn btn-primary"
                disabled={isError}
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* <div className="col">
          <label>State</label>

          <pre>{JSON.stringify(this.state, null, " ")}</pre>
        </div> */}
      </div>
    );
  }
}

export default Form;

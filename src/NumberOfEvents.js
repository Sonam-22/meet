import React, { Component } from "react";

class NumberOfEvents extends Component {
  handleInputChanged = (event) => {
    let value = event.target.value;
    if (value === "") {
      value = undefined;
    }
    this.props.updateEvents(undefined, value);
  };

  render() {
    return (
      <div className="NumberOfEvents">
        <input
          className="number-of-events"
          type="number"
          value={this.props.numberOfEvents}
          onChange={this.handleInputChanged}
        ></input>
      </div>
    );
  }
}

export default NumberOfEvents;

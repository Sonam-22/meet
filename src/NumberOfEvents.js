import React, { Component } from "react";

class NumberOfEvents extends Component {
  handleInputChanged = (event) => {
    let value = event.target.value;
    this.props.updateEvents(undefined, value < 0 || !value ? 0 : value);
  };

  render() {
    return (
      <div className="NumberOfEvents">
        <input
          className="number-of-events"
          type="number"
          min={0}
          value={this.props.numberOfEvents}
          onChange={this.handleInputChanged}
        ></input>
      </div>
    );
  }
}

export default NumberOfEvents;

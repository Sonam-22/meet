import React, { Component } from "react";
import { ErrorAlert } from "./Alert";

class NumberOfEvents extends Component {
  state = {
    errorText: "",
    numberOfEvents: this.props.numberOfEvents,
  };

  handleInputChanged = (event) => {
    let numberOfEvents = event.target.value;
    const errorText =
      numberOfEvents < 0 || numberOfEvents > 32 || !numberOfEvents
        ? "Select a number from 1 to 32"
        : "";
    this.setState({
      errorText,
      numberOfEvents,
    });
    if (!errorText) {
      this.props.updateEvents(undefined, numberOfEvents);
    }
  };

  render() {
    return (
      <div className="NumberOfEvents">
        <input
          className="number-of-events"
          type="number"
          min={0}
          value={this.state.numberOfEvents}
          onChange={this.handleInputChanged}
        ></input>
        <ErrorAlert id="errorAlert" text={this.state.errorText} />
      </div>
    );
  }
}

export default NumberOfEvents;

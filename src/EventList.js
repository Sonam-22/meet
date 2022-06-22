import React, { Component } from "react";
import { Fragment } from "react/cjs/react.production.min";
import Event from "./Event";

class EventList extends Component {
  render() {
    const { events } = this.props;
    return (
      <Fragment>
        <h3>Events</h3>
        <ul className="EventList">
          {events.map((event) => (
            <li key={event.id}>
              <Event event={event} />
            </li>
          ))}
        </ul>
      </Fragment>
    );
  }
}

export default EventList;

import React, { Component } from "react";
import "./App.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import "./nprogress.css";

import { getEvents, extractLocations } from "./api";

class App extends Component {
  static defaultNumberOfEvents = 32;

  state = {
    events: [],
    locations: [],
    numberOfEvents: App.defaultNumberOfEvents,
  };

  updateEvents = (location, eventCount) => {
    getEvents().then((events) => {
      let eventList = events;
      // filter event list by location
      if (location !== undefined) {
        if (location !== "all") {
          eventList = events.filter((event) => event.location === location);
        }
      }

      // Shorten event list
      let shortEventList = eventList.slice(0, eventCount);

      this.setState({
        events: shortEventList,
        numberOfEvents: eventCount,
      });
    });
  };

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return (
      <div className="App">
        <div className="search-container">
          <CitySearch
            locations={this.state.locations}
            updateEvents={this.updateEvents}
          />
          <NumberOfEvents
            numberOfEvents={this.state.numberOfEvents}
            updateEvents={this.updateEvents}
          />
        </div>

        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;

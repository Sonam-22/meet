import React, { Component } from "react";
import "./App.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import EventGenre from "./EventGenre";
import { InfoAlert } from "./Alert";
import "./nprogress.css";
import WelcomeScreen from "./WelcomeScreen";
import { getEvents, extractLocations, checkToken, getAccessToken } from "./api";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

class App extends Component {
  static defaultNumberOfEvents = 32;

  state = {
    events: [],
    locations: [],
    numberOfEvents: App.defaultNumberOfEvents,
    showWelcomeScreen: undefined,
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

  async componentDidMount() {
    // this.mounted = true;
    // getEvents().then((events) => {
    //   if (this.mounted) {
    //     this.setState({ events, locations: extractLocations(events) });
    //   }
    // });

    this.mounted = true;
    const accessToken = localStorage.getItem("access_token");
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({ events, locations: extractLocations(events) });
        }
      });
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter(
        (event) => event.location === location
      ).length;
      const city = location.split(", ").shift();
      return { city, number };
    });
    return data;
  };

  render() {
    const { locations, numberOfEvents, events, showWelcomeScreen } = this.state;
    if (showWelcomeScreen === undefined) return <div className="App" />;
    return (
      <div className="App">
        {!navigator.onLine && (
          <InfoAlert
            id="infoAlert"
            text="You are offline and currently viewing cached data"
          />
        )}
        <h1>Meet App</h1>

        <div className="search-container">
          <CitySearch locations={locations} updateEvents={this.updateEvents} />
          <NumberOfEvents
            numberOfEvents={numberOfEvents}
            updateEvents={this.updateEvents}
          />
        </div>
        <div>
          <div className="data-vis-wrapper">
            <div>
              <EventGenre events={events} />
            </div>
            <div>
              <ResponsiveContainer height={400}>
                <ScatterChart
                  margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                >
                  <CartesianGrid />
                  <XAxis type="category" dataKey="city" name="city" />
                  <YAxis
                    type="number"
                    dataKey="number"
                    name="number of events"
                    allowDecimals={false}
                  />
                  <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                  <Scatter data={this.getData()} fill="#8884d8" />
                </ScatterChart>
              </ResponsiveContainer>
            </div>
          </div>
          <EventList events={events} />
        </div>

        <WelcomeScreen
          showWelcomeScreen={showWelcomeScreen}
          getAccessToken={() => {
            getAccessToken();
          }}
        />
      </div>
    );
  }
}

export default App;

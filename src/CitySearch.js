import React, { Component } from "react";
import { InfoAlert } from "./Alert";

class CitySearch extends Component {
  state = {
    query: "",
    suggestions: [],
    showSuggestions: undefined,
    infoText: "",
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
    if (suggestions.length === 0) {
      this.setState({
        query: value,
        showSuggestions: false,
        suggestions: [],
        infoText:
          "We can not find the city you are looking for. Please try another city",
      });
    } else {
      this.setState({
        query: value,
        suggestions,
        showSuggestions: true,
        infoText: "",
      });
    }
  };
  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion,
      showSuggestions: false,
    });
    this.props.updateEvents(suggestion, undefined);
  };

  render() {
    return (
      <div className="CitySearch">
        <input
          type="text"
          className="city"
          placeholder="Search your city here"
          value={this.state.query}
          onFocus={() => this.setState({ showSuggestions: true })}
          onChange={this.handleInputChanged}
        />
        <ul
          className="suggestions"
          style={this.state.showSuggestions ? {} : { display: "none" }}
        >
          {this.state.suggestions.map((suggestion) => (
            <li
              key={suggestion}
              onClick={() => this.handleItemClicked(suggestion)}
            >
              {suggestion}
            </li>
          ))}
          <li onClick={() => this.handleItemClicked("all")}>
            <b>See all cities</b>
          </li>
        </ul>
        <InfoAlert id="infoAlert" text={this.state.infoText} />
      </div>
    );
  }
}

export default CitySearch;

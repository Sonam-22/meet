import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  const NUMBER_OF_EVENTS = 10;
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(
      <NumberOfEvents numberOfEvents={NUMBER_OF_EVENTS} />
    );
  });

  test("render text input", () => {
    expect(NumberOfEventsWrapper.find(".number-of-events")).toHaveLength(1);
  });

  test("renders text input correctly", () => {
    const inputValue =
      NumberOfEventsWrapper.find(".number-of-events").prop("value");
    expect(inputValue).toBe(NUMBER_OF_EVENTS);
  });
});

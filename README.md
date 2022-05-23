# meet

Meet is a serverless, progressive web application (PWA) built with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.

### FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS

As a user, I would like to be able to show/hide event details so that I can see more/less information about an event.

##### Scenario 1: An event element is collapsed by default

- Given the user searched for a list of events
- When the user gets the list of events
- Then the events should be collapsed by default

##### Scenario 2: User can expand an event to see its details

- Given the user chose an event
- When the user clicks on an event
- Then the event expands for more detail

##### Scenario 3: User can collapse an event to hide its details

- Given a user want to collapse the extra detail of an event
- When the user clicks on expanded detail
- Then the expanded detail will collapse to see less detail

### FEATURE 3: SPECIFY NUMBER OF EVENTS

As a user, I would like to be able to specify the number of events I want to see so that I can see more or fewer events in the events list .

##### Scenario 1: When user hasn’t specified a number, 32 is the default number

- Given the user searched for events
- When the user gets the list of events
- Then the list of events should have 32 events by default.

##### Scenario 2: User can change the number of events they want to see

- Given the user wanted to see more/less events
- When the user changes the number of events
- Then the list of events should be as long as the number specify by the user

### FEATURE 4: USE THE APP WHEN OFFLINE

As a user I should be able to view my information offline, so that I can check Events even without Internet Access.

##### Scenario 1: Show cached data when there’s no internet connection

- Given user has no connection to internet
- When the user opens the app
- Then cached data is still available to see

##### Scenario 2: Show error when user changes the settings (city, time range)

- Given user has no Internet connection
- When the user changes the information(city, time range)
- Then user will get an error message

### FEATURE 5: DATA VISUALIZATION

As a user, I would like to be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city.

##### Scenario 1: Show a chart with the number of upcoming events in each city

- Given the user wanted to see upcoming events
- When the user views the chart of upcoming events
- Then he can see the chart with the upcoming events by city

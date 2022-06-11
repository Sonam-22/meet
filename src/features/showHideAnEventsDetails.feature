Feature: Show/hide and event's details

  Scenario: When the user has not clicked on an event, each event element should be collapsed.
    Given the main page is open
    When the user has not clicked on an event
    Then each event element should be collapsed.

  Scenario: When the user clicks on a collapsed event element, the element should expand.
    Given an event element is collapsed
    When the user clicks on an event
    Then the event element should expand.

  Scenario: When the user clicks on an expanded event element, the element should collapse.
    Given an event element is expanded
    When the user clicks on an event
    Then the event element should collapse. 

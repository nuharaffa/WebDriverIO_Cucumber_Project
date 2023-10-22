Feature: Logout KasirAja Website

Scenario: As a user, I success logout from KasirAja
    Given User on the login page
    When User login with <email> and password <password>
    And User clicks on login button
    And User should see a header kasirAja
    Then User clicks logout
    And User verify back to login page

Examples:
    | email                 | password     |
    | raffatest@gmail.com   | raffabenar!  |
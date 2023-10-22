Feature: Login KasirAja Website

Scenario: As a user, I success login into the dahsboard KasirAja
    Given User on the login page
    When User login with <email> and password <password>
    And User clicks on login button
    Then User should see a header kasirAja
    And User clicks logout

Examples:
    | email                 | password    |
    | raffatest@gmail.com   | raffabenar! |

Scenario: As a user, I failed login into the dahsboard KasirAja
    Given User on the login page
    When User login with <email> and password <password>
    And User clicks on login button
    Then User should see alert Kredensial yang Anda berikan salah

Examples:
    | email                     | password |
    | raffatest@gmail.com       | salahhhh!|
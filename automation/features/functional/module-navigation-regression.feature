@regression @functional @navigation @p1
Feature: Module navigation regression
  Validate that major CareFlow modules are reachable and render expected page roots for permitted roles.

  @tc-TC-TS-002-001-01 @ts-TS-002-001 @ac-AC-US-002-001-001
  Scenario Outline: Authorized role can open module and see page root
    Given I am logged in as "<role>"
    When I open navigation item "<module>"
    Then I should see module root "<root>"

    Examples:
      | role                      | module              | root                          |
      | Doctor                    | Patient Management  | page-patients-root            |
      | Doctor                    | Patient Search      | page-patient-search-root      |
      | Receptionist              | Appointments        | page-appointments-root        |
      | Doctor                    | Providers           | page-providers-root           |
      | Patient                   | Medical Records     | page-medical-records-root     |
      | Patient                   | Prescriptions       | page-prescriptions-root       |
      | Receptionist              | Billing & Insurance | page-billing-insurance-root   |
      | Receptionist              | Claims              | page-claims-root              |
      | Doctor                    | Notifications       | page-notifications-root       |
      | Healthcare Administrator  | Administration      | page-admin-root               |
      | Doctor                    | Profile             | page-profile-root             |
      | Doctor                    | Settings            | page-settings-root            |
      | Doctor                    | Help                | page-help-root                |

  @tc-TC-TS-011-004-01 @ts-TS-011-004 @ac-AC-US-011-002-001
  Scenario: Doctor can open help from navigation
    Given I am logged in as "Doctor"
    When I open navigation item "Help"
    Then I should see module root "page-help-root"

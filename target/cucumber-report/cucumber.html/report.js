$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("VisaConfirmation.feature");
formatter.feature({
  "line": 2,
  "name": "Visa Confirmation Test",
  "description": "User should be able to find out if they need a visa or not to come to UK",
  "id": "visa-confirmation-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke"
    }
  ]
});
formatter.before({
  "duration": 2820032600,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "An Australian coming to UK for tourism",
  "description": "",
  "id": "visa-confirmation-test;an-australian-coming-to-uk-for-tourism",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User clicks on start button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User selects nationality \"Australia\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User clicks on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User selects reason \"Tourism or visiting family and friends\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User clicks on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User will see the message \"You will not need a visa to come to the UK\"",
  "keyword": "Then "
});
formatter.match({
  "location": "VisaConfirmationSteps.userIsOnHomePage()"
});
formatter.result({
  "duration": 57087800,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationSteps.userClicksOnStartButton()"
});
formatter.result({
  "duration": 176478900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Australia",
      "offset": 26
    }
  ],
  "location": "VisaConfirmationSteps.userSelectsNationality(String)"
});
formatter.result({
  "duration": 76418100,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationSteps.userClicksOnContinueButton()"
});
formatter.result({
  "duration": 228034400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tourism or visiting family and friends",
      "offset": 21
    }
  ],
  "location": "VisaConfirmationSteps.userSelectsReason(String)"
});
formatter.result({
  "duration": 77508800,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationSteps.userClicksOnContinueButton()"
});
formatter.result({
  "duration": 255214100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You will not need a visa to come to the UK",
      "offset": 27
    }
  ],
  "location": "VisaConfirmationSteps.userWillSeeTheMessage(String)"
});
formatter.result({
  "duration": 37744200,
  "status": "passed"
});
formatter.after({
  "duration": 651499400,
  "status": "passed"
});
formatter.before({
  "duration": 1478440900,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "A Chilean coming to the UK for work and plans on staying for longer than six months",
  "description": "",
  "id": "visa-confirmation-test;a-chilean-coming-to-the-uk-for-work-and-plans-on-staying-for-longer-than-six-months",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "User is on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "User clicks on start button",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User selects nationality \"Chile\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User clicks on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User selects reason \"Work, academic visit or business\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User clicks on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User selects length of stay \"longer than 6 months\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User clicks on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User selects job type \"Health and care professional\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User clicks on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User will see the message \"You need a visa to work in health and care\"",
  "keyword": "Then "
});
formatter.match({
  "location": "VisaConfirmationSteps.userIsOnHomepage()"
});
formatter.result({
  "duration": 177800,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationSteps.userClicksOnStartButton()"
});
formatter.result({
  "duration": 155927100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chile",
      "offset": 26
    }
  ],
  "location": "VisaConfirmationSteps.userSelectsNationality(String)"
});
formatter.result({
  "duration": 72765000,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationSteps.userClicksOnContinueButton()"
});
formatter.result({
  "duration": 173962900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Work, academic visit or business",
      "offset": 21
    }
  ],
  "location": "VisaConfirmationSteps.userSelectsReason(String)"
});
formatter.result({
  "duration": 70328800,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationSteps.userClicksOnContinueButton()"
});
formatter.result({
  "duration": 191829800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "longer than 6 months",
      "offset": 29
    }
  ],
  "location": "VisaConfirmationSteps.userSelectsLengthOfStay(String)"
});
formatter.result({
  "duration": 54234400,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationSteps.userClicksOnContinueButton()"
});
formatter.result({
  "duration": 193080900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Health and care professional",
      "offset": 23
    }
  ],
  "location": "VisaConfirmationSteps.userSelectsJobType(String)"
});
formatter.result({
  "duration": 62740700,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationSteps.userClicksOnContinueButton()"
});
formatter.result({
  "duration": 230076100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You need a visa to work in health and care",
      "offset": 27
    }
  ],
  "location": "VisaConfirmationSteps.userWillSeeTheMessage(String)"
});
formatter.result({
  "duration": 40716800,
  "status": "passed"
});
formatter.after({
  "duration": 647012600,
  "status": "passed"
});
formatter.before({
  "duration": 1449442800,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "A columbian National coming to the UK to join a partner for a long stay",
  "description": "",
  "id": "visa-confirmation-test;a-columbian-national-coming-to-the-uk-to-join-a-partner-for-a-long-stay",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 27,
  "name": "User is on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "User clicks on start button",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "User selects nationality \"Colombia\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User clicks on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User selects reason \"Join partner or family for a long stay\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User clicks on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User selects immigration status \"Yes\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User clicks on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User will see the message \"You’ll need a visa to join your family or partner in the UK\"",
  "keyword": "Then "
});
formatter.match({
  "location": "VisaConfirmationSteps.userIsOnHomepage()"
});
formatter.result({
  "duration": 26800,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationSteps.userClicksOnStartButton()"
});
formatter.result({
  "duration": 166641400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Colombia",
      "offset": 26
    }
  ],
  "location": "VisaConfirmationSteps.userSelectsNationality(String)"
});
formatter.result({
  "duration": 64594500,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationSteps.userClicksOnContinueButton()"
});
formatter.result({
  "duration": 220442900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Join partner or family for a long stay",
      "offset": 21
    }
  ],
  "location": "VisaConfirmationSteps.userSelectsReason(String)"
});
formatter.result({
  "duration": 111188600,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationSteps.userClicksOnContinueButton()"
});
formatter.result({
  "duration": 198009900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 33
    }
  ],
  "location": "VisaConfirmationSteps.userSelectsImmigrationStatus(String)"
});
formatter.result({
  "duration": 59163700,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationSteps.userClicksOnContinueButton()"
});
formatter.result({
  "duration": 227586900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You’ll need a visa to join your family or partner in the UK",
      "offset": 27
    }
  ],
  "location": "VisaConfirmationSteps.userWillSeeTheMessage(String)"
});
formatter.result({
  "duration": 39279900,
  "status": "passed"
});
formatter.after({
  "duration": 650179500,
  "status": "passed"
});
});
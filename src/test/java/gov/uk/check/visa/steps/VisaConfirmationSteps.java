package gov.uk.check.visa.steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import gov.uk.check.visa.pages.*;

public class VisaConfirmationSteps {
    @Given("^User is on HomePage$")
    public void userIsOnHomePage() {
    }

    @When("^User clicks on start button$")
    public void userClicksOnStartButton() {
        new StartPage().clickStartNow();
    }

    @And("^User selects nationality \"([^\"]*)\"$")
    public void userSelectsNationality(String nation) {
        new SelectNationalityPage().selectNationality(nation);
    }

    @And("^User clicks on continue button$")
    public void userClicksOnContinueButton() {
        new SelectNationalityPage().clickNextStepButton();
    }

    @And("^User selects reason \"([^\"]*)\"$")
    public void userSelectsReason(String reason) {
        new ReasonForTravelPage().selectReasonForVisit(reason);

    }

    @Then("^User will see the message \"([^\"]*)\"$")
    public void userWillSeeTheMessage(String expMsg) {
        new ResultPage().getResultMessage(expMsg);
    }

    @Given("^User is on Homepage$")
    public void userIsOnHomepage() {
    }

    @And("^User selects length of stay \"([^\"]*)\"$")
    public void userSelectsLengthOfStay(String stay) {
        new DurationOfStayPage().selectLengthOfStay(stay);

    }

    @And("^User selects job type \"([^\"]*)\"$")
    public void userSelectsJobType(String jobType) {
        new WorkTypePage().selectJobType(jobType);

    }

    @And("^User selects immigration status \"([^\"]*)\"$")
    public void userSelectsImmigrationStatus(String status) {
        new FamilyImmigrationStatusPage().selectImmigrationStatus(status);

    }
}

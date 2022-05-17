package gov.uk.check.visa.pages;

import gov.uk.check.visa.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class FamilyImmigrationStatusPage extends Utility {
    private static final Logger log = LogManager.getLogger(DurationOfStayPage.class.getName());
    public FamilyImmigrationStatusPage() {
        PageFactory.initElements(driver, this);
    }
    @CacheLookup
    @FindBy(xpath = "//div[@class='govuk-radios']//label")
    List<WebElement> immigrationStatus;
    @CacheLookup
    @FindBy(xpath = "//button[contains(text(),'Continue')]")
    WebElement continueButton;

    public void selectImmigrationStatus(String status) {
        for (WebElement menu : immigrationStatus) {
            if (menu.getText().equals(status)) {
                clickOnElement(menu);
                break;
            }
        }
    }

    public void clickNextStepButton() {
        clickOnElement(continueButton);
        log.info("Clicking on NextStepButton "+continueButton.toString());
    }
}

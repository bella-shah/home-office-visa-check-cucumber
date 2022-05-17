package gov.uk.check.visa.pages;

import gov.uk.check.visa.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class StartPage extends Utility {
    private static final Logger log = LogManager.getLogger(DurationOfStayPage.class.getName());
    public StartPage() {
        PageFactory.initElements(driver, this);
    }
    @CacheLookup
    @FindBy(xpath = "//a[normalize-space()='Start now']")
    WebElement startNowButton;
    @CacheLookup
    @FindBy(xpath = "//button[normalize-space()='Accept additional cookies']")
    WebElement acceptCookiesButton1;


    public void clickStartNow() {
        clickOnElement(startNowButton);
        log.info("Clicking on startNowButton "+ startNowButton.toString());
    }

    public void acceptCookiesButton() {
        clickOnElement(acceptCookiesButton1);
        log.info("Clicking on acceptCookiesButton "+ acceptCookiesButton1.toString());
    }


}



import { browser, by, element, ExpectedConditions } from 'protractor';

export class CreatePartyPO {
    
    browseToPage(){
        browser.manage().window().setSize(400, 720);
        browser.get('/create-party');
        browser.driver.sleep(500);
    }
    
    async fillForm(){
        await element(by.css('ion-input[formControlName="name"] input')).sendKeys('Party test');
        await element(by.css('ion-textarea[formControlName="description"]  textarea')).sendKeys('Party e2e testing');     
        await element(by.css('ion-item.item-interactive:nth-child(3)')).click(); 
        browser.sleep(500);
        await element(by.css('ion-item.sc-ion-select-popover-md:nth-child(4)')).click();
        browser.sleep(5000);
        await element(by.css('ion-item.item:nth-child(4)')).click(); 
        browser.sleep(500);
        await element(by.css('ion-item.sc-ion-select-popover-md:nth-child(3)')).click();
        browser.sleep(5000);
        await element(by.css('[type="submit"]')).click();
        browser.sleep(200);
    }

    geyAlert(){
        return element(by.css('.toast-wrapper')).getText();
    }

}
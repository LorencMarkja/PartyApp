import { browser, by, element, ExpectedConditions } from 'protractor';

export class LoginPO {
    
    browseToPage(){
        browser.manage().window().setSize(400, 720);
        browser.get('/login');
        browser.driver.sleep(500);
    }

    getTitle(){
        return element(by.deepCss('ion-title')).getText();
    }

    async fillRightCredential(){

        await element(by.css('ion-input[formControlName="username"] input')).sendKeys('admin'); 
        await element(by.css('ion-input[formControlName="password"] input')).sendKeys('admin'); 
        browser.sleep(200);
        await element(by.css('[type="submit"]')).click();
        browser.sleep(200);
    }
    
    async fillWrongCredential(){
        
        await element(by.css('ion-input[formControlName="username"] input')).sendKeys('provainfo'); 
        await element(by.css('ion-input[formControlName="password"] input')).sendKeys('12345'); 
        browser.sleep(200);
        await element(by.css('[type="submit"]')).click();
        browser.sleep(200);
    }
}
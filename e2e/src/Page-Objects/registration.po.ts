import { browser, by, element, ExpectedConditions } from 'protractor';

export class RegistrationPO {

    browseToPage(){
        browser.manage().window().setSize(400, 720);
        browser.get('/register');
        browser.driver.sleep(500);
    }

    getTitle(){
        return element(by.deepCss('ion-title')).getText();
    }

    async fillForm(){
        await element(by.css('ion-input[formControlName="firstname"] input')).sendKeys('Admin2');
        await element(by.css('ion-input[formControlName="lastname"] input')).sendKeys('Admin2');
        await element(by.css('ion-input[formControlName="username"] input')).sendKeys('AdminProva');
        await element(by.css('ion-input[formControlName="password"] input')).sendKeys('123456');
        browser.sleep(200);
        await element(by.css('[type="submit"]')).click();
        browser.sleep(200);
    }

    async fillFormInvalidData(){
        await element(by.css('ion-input[formControlName="firstname"] input')).sendKeys('Prova');
        await element(by.css('ion-input[formControlName="lastname"] input')).sendKeys('Prova');
        await element(by.css('ion-input[formControlName="username"] input')).sendKeys('admin');
        await element(by.css('ion-input[formControlName="password"] input')).sendKeys('12345');
        browser.sleep(200);
        await element(by.css('[type="submit"]')).click();
        browser.sleep(200);
    }

    getAlert(){
        return element(by.css('.alert-wrapper')).getText();
    }

}
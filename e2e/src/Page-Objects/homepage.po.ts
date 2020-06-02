import { browser, by, element, ExpectedConditions } from 'protractor';

export class HomepagePO {
    
    browseToPage(){
        browser.manage().window().setSize(400, 720);
        browser.get('/');
        browser.driver.sleep(500);
    }
    
    imglogo(){
        return element(by.tagName('ion-img'));
    }

    getLoginButton(){
        return element(by.css('[routerlink="/login"]'));
    }

    getRegistrationButton(){
        return element(by.css('[routerlink="/register"]'));
    }
    
    getLoginText() {
        return element(by.css('ion-title')).getText();
    }
}
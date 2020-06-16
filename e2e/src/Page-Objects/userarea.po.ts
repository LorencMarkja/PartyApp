import { browser, by, element, ExpectedConditions } from 'protractor';

export class userareaPO{
    browseToPage(){
        browser.manage().window().setSize(400, 720);
        browser.get('/tabs/user-area');
        browser.driver.sleep(500);
    }

    getTitle(){
        return element(by.deepCss('ion-title')).getText();
    }

    getAvatar(){
        return element(by.css('.avatar'));
    }

    getInfo(){
        return element(by.css('.testo'));
    }

    getLogOutBut(){
        return element(by.id('logout'));
    }

    getPartyList(){
        return element(by.css('.lista'))
    }

}
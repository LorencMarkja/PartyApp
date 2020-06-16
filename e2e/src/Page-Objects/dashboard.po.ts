import { browser, by, element, ExpectedConditions } from 'protractor';

export class dashboardPO{
    browseToPage(){
        browser.manage().window().setSize(400, 720);
        browser.get('/tabs/dashboard');
        browser.driver.sleep(500);
    }

    getTitle(){
        return element(by.deepCss('ion-title')).getText();
    }

    getButCreaParty(){
        return element(by.id('new_P'));
    }

    getPartyList(){
        return element(by.id('listaP'));
    }

}
import { browser, by, element, ExpectedConditions } from 'protractor';

export class PartyPlaylistPO {

    browseToPage(){
        browser.manage().window().setSize(400, 720);
        browser.get('/party-playlist/19');
        browser.driver.sleep(500);
    }

    getTitle(){
        return element(by.deepCss('ion-title')).getText();
    }

    getYTplayer(){
        return element(by.id('player'));    
    }
}
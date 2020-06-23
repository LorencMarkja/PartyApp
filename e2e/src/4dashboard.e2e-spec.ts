import { dashboardPO } from './Page-Objects/dashboard.po';
import {browser} from 'protractor';

describe ('Dashboard Page', () => {
    let dashboard: dashboardPO;

    beforeEach(() =>{
        dashboard = new dashboardPO();
        dashboard.browseToPage();
    });

    it('should be display the button "crea party"', () =>{
        expect (dashboard.getButCreaParty().isDisplayed());
    });

    it('should be display party list', () =>{
        expect (dashboard.getPartyList().isDisplayed());
    });

})
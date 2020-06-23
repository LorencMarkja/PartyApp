import { userareaPO } from './Page-Objects/userarea.po';

describe ('User-area Page', () => {
    let userarea: userareaPO;

    beforeAll(() =>{
        userarea = new userareaPO();
        userarea.browseToPage();
    });

    it('should be display the title', () =>{
        expect (userarea.getTitle()).toEqual('PROFILO');
    });

    it('should be display user avatar', () =>{
        expect (userarea.getAvatar().isDisplayed());
    });

    it('should be display user info', () =>{
        expect (userarea.getInfo().isDisplayed());
    });

    it('should be display user party list', () =>{
        expect (userarea.getPartyList().isDisplayed());
    });

})
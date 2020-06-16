import { RegistrationPO } from './Page-Objects/registration.po';
import { browser } from 'protractor';

describe('Registration Page', () => {
  let reg: RegistrationPO;
  
    beforeEach(() => {
        reg= new RegistrationPO();
        reg.browseToPage();
    });

    it('should display registration Title', () => {
        expect(reg.getTitle()).toEqual('REGISTRAZIONE');
    });
    
    // it('Registration with valid data', async () => {

    //     await reg.fillForm();
    //     browser.sleep(10000);
    //     expect(browser.getCurrentUrl()).toContain('/home');      
    //   });

    it('Registration with invalid data', async () => {
        await reg.fillFormInvalidData();
        browser.sleep(1000);
        expect(reg.getAlert()).toContain('There is an error');
    });
    
});

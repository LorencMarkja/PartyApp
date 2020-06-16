import { LoginPO } from './Page-Objects/login.po';
import { browser } from 'protractor';

describe('Login Page', () => {
  let login: LoginPO;
  
    beforeEach(() => {
        login= new LoginPO();
        login.browseToPage();
    });

    it('should display Login Title', () => {
        expect(login.getTitle()).toEqual('LOGIN');
    });


    it('Login with correct credential', async () => {

      await login.fillRightCredential();
      browser.sleep(1000);
      expect(browser.getCurrentUrl()).toContain('/dashboard');
    
    });

    it('Login with invalid credential', async () => {

        await login.fillWrongCredential();
        browser.sleep(1000);
        expect(browser.getCurrentUrl()).toContain('/login');
      
      });

      
});

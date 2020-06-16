import { HomepagePO } from './Page-Objects/homepage.po';
import { browser } from 'protractor';

describe('Homepage', () => {
  let homepage: HomepagePO;
  
  beforeEach(() => {
    homepage = new HomepagePO();
    homepage.browseToPage();
  });

  it('should be display the logo', () => {
    expect(homepage.imglogo().isDisplayed());
  })

  it('should be display Login Button', () => {
    expect(homepage.getLoginButton().getText()).toEqual('LOGIN');
  });

  it('should navigate to Login page', () => {
    homepage.getLoginButton().click();
    browser.sleep(500);
    expect(browser.getCurrentUrl()).toContain('/login');
  });

  it('should be display Registration Button', () => {
    expect(homepage.getRegistrationButton().getText()).toEqual('REGISTRAZIONE');
  });

  it('should navigate to Registration page', () => {
    homepage.getRegistrationButton().click();
    browser.sleep(500);
    expect(browser.getCurrentUrl()).toContain('/register');
  });
  
});

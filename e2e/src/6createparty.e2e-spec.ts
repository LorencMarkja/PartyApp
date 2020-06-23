import { CreatePartyPO } from './Page-Objects/createparty.po';
import { browser } from 'protractor';

describe('Create-Party Page', () => {
  let createParty: CreatePartyPO;
  
  beforeEach(() => {
    createParty = new CreatePartyPO();
    createParty.browseToPage();
  });

  it('should create party with valid data', async () => {
    await createParty.fillForm();
    browser.sleep(1000);
    expect();  
   });
  
});

import { PartyPlaylistPO } from './Page-Objects/partyplaylist.po';
import { browser } from 'protractor';

describe('Party Playlist Page', () => {
    let Partyplay: PartyPlaylistPO;
    
    beforeEach(() => {
      Partyplay = new PartyPlaylistPO();
      Partyplay.browseToPage();
    });
  
    it('should display registration Title', () => {
        expect(Partyplay.getTitle()).toEqual('Party Playlist');
    });

    it('should display Youtube Player', ()=>{
        expect(Partyplay.getYTplayer().isDisplayed);
    });
    
  });
  
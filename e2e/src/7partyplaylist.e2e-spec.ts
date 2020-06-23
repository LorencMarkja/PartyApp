import { PartyPlaylistPO } from './Page-Objects/partyplaylist.po';
import { browser } from 'protractor';

describe('Party Playlist Page', () => {
    let Partyplay: PartyPlaylistPO;
    
    beforeEach(() => {
      Partyplay = new PartyPlaylistPO();
      Partyplay.browseToPage();
    });
  
    it('should display Party playlist Title', () => {
        expect(Partyplay.getTitle()).toEqual('Playlist Party');
    });

    it('should display Youtube Player', ()=>{
        expect(Partyplay.getYTplayer().isDisplayed);
    });
    
  });
  
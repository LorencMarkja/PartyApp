import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PartyPlaylistPage } from './party-playlist.page';

describe('PartyPlaylistPage', () => {
  let component: PartyPlaylistPage;
  let fixture: ComponentFixture<PartyPlaylistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartyPlaylistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PartyPlaylistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

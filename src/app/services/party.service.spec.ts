import { TestBed } from '@angular/core/testing';
import {RouterModule} from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { PartyService } from './party.service';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { HttpClientModule} from '@angular/common/http';
import {IonicModule} from '@ionic/angular';

describe('PartyService', () => {
  let service: PartyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(),
        HttpClientTestingModule,
        HttpClientModule,
        RouterModule.forRoot([])],
      providers: [
        { provide: APP_BASE_HREF, useValue : '/' }
      ]
    });
    service = TestBed.inject(PartyService);
  });

  it('Test Passato', () => {
    expect(service).toBeTruthy();
  });
});

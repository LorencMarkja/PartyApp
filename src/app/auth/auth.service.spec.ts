import {async, TestBed} from '@angular/core/testing';
import { AuthService } from './auth.service';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { HttpClientModule} from '@angular/common/http';
import {LoginPage} from './login/login.page';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';


describe('AuthService', () => {
  let service: AuthService;
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
    service = TestBed.inject(AuthService);
  });
  it('Test Passato', () => {
    expect(service).toBeTruthy();
  });
});

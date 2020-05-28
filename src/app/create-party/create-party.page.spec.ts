import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule} from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { HttpClientModule} from '@angular/common/http';

import { CreatePartyPage } from './create-party.page';

describe('CreatePartyPage', () => {
  let component: CreatePartyPage;
  let fixture: ComponentFixture<CreatePartyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePartyPage ],
      imports: [IonicModule.forRoot(),
                HttpClientTestingModule,
                HttpClientModule,
                RouterModule.forRoot([])],
      providers: [
        { provide: APP_BASE_HREF, useValue : '/' }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CreatePartyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('Test Passato', () => {
    expect(component).toBeTruthy();
  });
});

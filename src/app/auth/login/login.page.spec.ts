import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { HttpClientModule} from '@angular/common/http';
import { LoginPage } from './login.page';
import { RouterModule} from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';


describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [  ],
      imports: [IonicModule.forRoot(),
                HttpClientTestingModule,
                HttpClientModule,
                RouterModule.forRoot([])],
      providers: [
        { provide: APP_BASE_HREF, useValue : '/' }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('Test Passato', () => {
    expect(component).toBeTruthy();
  });
});

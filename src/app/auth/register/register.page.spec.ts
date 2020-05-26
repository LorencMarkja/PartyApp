import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule} from '@angular/common/http';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { RegisterPage } from './register.page';
import { RouterModule} from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';



describe('RegisterPage', () => {
  let component: RegisterPage;
  let fixture: ComponentFixture<RegisterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterPage ],
      imports: [IonicModule.forRoot(),
                HttpClientModule,
                HttpClientTestingModule,
                RouterModule.forRoot([])],
      providers: [
        { provide: APP_BASE_HREF, useValue : '/' }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('Test Passato', () => {
    expect(component).toBeTruthy();
  });
});

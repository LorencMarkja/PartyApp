import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { HttpClientModule} from '@angular/common/http';

import { DashboardPage } from './dashboard.page';

describe('DashboardPage', () => {
  let component: DashboardPage;
  let fixture: ComponentFixture<DashboardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ],
      imports: [IonicModule.forRoot(),
                HttpClientModule,
                HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('Test Passato', () => {
    expect(component).toBeTruthy();
  });
});

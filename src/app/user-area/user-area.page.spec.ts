import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserAreaPage } from './user-area.page';

describe('UserAreaPage', () => {
  let component: UserAreaPage;
  let fixture: ComponentFixture<UserAreaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAreaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserAreaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

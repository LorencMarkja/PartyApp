import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreatePartyPage } from './create-party.page';

describe('CreatePartyPage', () => {
  let component: CreatePartyPage;
  let fixture: ComponentFixture<CreatePartyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePartyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreatePartyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

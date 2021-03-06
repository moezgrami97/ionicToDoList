import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccueilPage } from './accueil.page';

describe('page accueil', () => {
  let component: AccueilPage;
  let fixture: ComponentFixture<AccueilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccueilPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccueilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('must be created', () => {
    expect(component).toBeTruthy();
  });
});

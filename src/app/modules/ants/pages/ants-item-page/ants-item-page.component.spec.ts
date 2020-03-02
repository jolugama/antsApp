import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AntsItemPageComponent } from './ants-item-page.component';

describe('ItemPage', () => {
  let component: AntsItemPageComponent;
  let fixture: ComponentFixture<AntsItemPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AntsItemPageComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AntsItemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

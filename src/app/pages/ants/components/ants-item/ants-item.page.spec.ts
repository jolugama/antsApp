import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AntsItemPage } from './ants.item.page';

describe('ItemPage', () => {
  let component: AntsItemPage;
  let fixture: ComponentFixture<AntsItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AntsItemPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AntsItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

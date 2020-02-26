import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntsListComponent } from './ants-list.component';

describe('AntsListComponent', () => {
  let component: AntsListComponent;
  let fixture: ComponentFixture<AntsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

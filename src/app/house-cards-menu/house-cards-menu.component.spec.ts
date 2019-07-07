import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseCardsMenuComponent } from './house-cards-menu.component';

describe('HouseCardsMenuComponent', () => {
  let component: HouseCardsMenuComponent;
  let fixture: ComponentFixture<HouseCardsMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseCardsMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseCardsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

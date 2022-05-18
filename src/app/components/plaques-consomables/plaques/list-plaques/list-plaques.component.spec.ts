import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPlaquesComponent } from './list-plaques.component';

describe('ListPlaquesComponent', () => {
  let component: ListPlaquesComponent;
  let fixture: ComponentFixture<ListPlaquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPlaquesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPlaquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
